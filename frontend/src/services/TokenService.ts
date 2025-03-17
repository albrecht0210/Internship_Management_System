import axios, { AxiosResponse } from "axios";
import apiConfig from "./apiConfig";
import { ICredentials, IRefreshCredential, ITokenCredential, ITokenResponse } from "../@types/service";

const LOCAL_BASE_URL = `${apiConfig.API_URL}/token`;

const localInstance = axios.create();

const TokenService = {
    /**
     * Generates a token using the provided user credentials.
     *
     * @param {ICredentials} credentials - User credentials.
     * @returns {Promise<ITokenResponse>} A Promise that resolves with the generated token.
     */
    token: (credentials: ICredentials): Promise<AxiosResponse<ITokenResponse>> => localInstance.post(`${LOCAL_BASE_URL}/`, credentials),

    /**
     * Verifies the authenticity of a token.
     *
     * @param {ITokenResponse} credential - Authentication token to verify.
     * @returns {Promise<any>} A Promise that resolves if the token is valid.
     */
    verify: (credential: ITokenCredential): Promise<AxiosResponse<any>> => localInstance.post(`${LOCAL_BASE_URL}/verify/`, credential),

    /**
     * Refreshes an authentication token using a refresh token.
     *
     * @param {IRefreshCredential} credential - Refresh token used to obtain a new authentication token.
     * @returns {Promise} A Promise that resolves with the new authentication token.
     */
    refresh: (credential: IRefreshCredential): Promise<AxiosResponse<ITokenResponse>> => localInstance.post(`${LOCAL_BASE_URL}/refresh/`, credential),
};

export default TokenService;
