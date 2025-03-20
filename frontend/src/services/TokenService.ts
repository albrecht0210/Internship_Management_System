import axios, { AxiosResponse } from "axios";
import apiConfig from "./apiConfig";
import { IToken, ITokenPair, IAccessToken, IRefreshToken } from "../@types/token";
import { ICredentials } from "../@types/form";

// Base URL for token-related API endpoints
const LOCAL_BASE_URL = `${apiConfig.API_URL}/token`;

// Create an Axios instance to use for API calls
const localInstance = axios.create();

const TokenService = {
    /**
     * Generates an authentication token using the provided user credentials.
     * 
     * This endpoint is typically used during login to authenticate a user and 
     * retrieve both an access and a refresh token.
     * 
     * @param {ICredentials} credentials - The user's credentials (email and password).
     * @returns {Promise<AxiosResponse<ITokenPair>>} A Promise that resolves with a response containing both the access and refresh tokens.
     */
    token: (credentials: ICredentials): Promise<AxiosResponse<ITokenPair>> => localInstance.post(`${LOCAL_BASE_URL}/`, credentials),

    /**
     * Verifies the authenticity of an authentication token.
     * 
     * This endpoint is used to check if a given token is still valid, often used for 
     * session management to ensure the user's session is active.
     * 
     * @param {IToken} credential - The token to verify, either access or refresh token.
     * @returns {Promise<AxiosResponse<void>>} A Promise that resolves with no content if the token is valid.
     */
    verify: (credential: IToken): Promise<AxiosResponse<void>> => localInstance.post(`${LOCAL_BASE_URL}/verify/`, credential),

    /**
     * Refreshes an authentication token using a refresh token.
     * 
     * This endpoint is used to obtain a new access token when the original access token has expired,
     * using the refresh token that was originally provided.
     * 
     * @param {IRefreshToken} credential - The refresh token used to obtain a new access token.
     * @returns {Promise<AxiosResponse<IAccessToken>>} A Promise that resolves with the new access token.
     */
    refresh: (credential: IRefreshToken): Promise<AxiosResponse<IAccessToken>> => localInstance.post(`${LOCAL_BASE_URL}/refresh/`, credential),
};

export default TokenService;
