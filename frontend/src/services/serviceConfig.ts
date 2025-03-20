import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import apiConfig from "./apiConfig";
import Cookies from "js-cookie";
import { deHash, hash } from "../utils/mask";
import { redirect } from "react-router-dom";
import TokenService from "./TokenService";

export const api = axios.create({
    baseURL: apiConfig.API_URL,
});

/**
 * Interceptor function to modify outgoing requests before they are sent.
 */
api.interceptors.request.use(
    (requestConfig) => {
        if (requestConfig.baseURL !== apiConfig.API_URL) {
            return requestConfig;
        }

        const tokenId = localStorage.getItem("tokenId");
        const accessToken = tokenId ? deHash(Cookies.get("accessToken"), tokenId) : null;

        if (accessToken && requestConfig.headers) {
            requestConfig.headers.Authorization = `Bearer ${accessToken}`;
        }

        return requestConfig;
    },
    (error) => Promise.reject(error)
);

/**
 * Interceptor function to handle responses from the API.
 * Handles token expiration errors (HTTP status code 401) and refreshes the access token.
 */
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error?.config as AxiosRequestConfig & { sent?: boolean };
        if (error?.response?.status === 401 && !originalRequest?.sent) {
            originalRequest.sent = true;

            try {
                const tokenId = localStorage.getItem("tokenId");
                const refreshToken = tokenId ? deHash(Cookies.get("refreshToken"), tokenId) : null;

                if (!refreshToken) throw new Error("No refresh token available");

                await TokenService.verify({ token: refreshToken });
                const { data: newToken } = await TokenService.refresh({ refresh: refreshToken });

                if (originalRequest.headers) {

                    originalRequest.headers.Authorization = `Bearer ${newToken.access}`;
                }

                Cookies.set("accessToken", hash(newToken.access, tokenId) ?? "");

                return api(originalRequest);
            } catch (err) {
                Cookies.remove("accessToken");
                Cookies.remove("refreshToken");
                redirect("/");
                throw err;
            }
        }

        return Promise.reject(error);
    }
);