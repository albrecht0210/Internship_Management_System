import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext"
import { ERROR, ERROR_401_SESSION_EXPIRED, IDLE, LOADING, STATUS_ACTIONS, SUCCESS } from "../../utils/constant";
import { IAccessToken, IRefreshToken } from "../../@types/token";
import TokenService from "../../services/TokenService";
import { IRefreshTokenHook } from "../../@types/hook";

/**
 * Custom hook to manage the refresh token.
 *
 * @returns {IRefreshTokenHook} An object containing the current token status, message, and a function to generate a new token.
 */
const useRefreshToken = (): IRefreshTokenHook => {
    // Extract the refresh function from the auth context
    const { refresh } = useAuthContext();

    const [status, setStatus] = useState<string>(IDLE);
    const [message, setMessage] = useState<string>("");

    /**
     * Generates a new access token based on the provided refresh token data and returns a promise that resolves
     * when complete.
     *
     * @param {IRefreshToken} data The IRefreshToken object used to generate the access token.
     * error.
     */
    const generateAccessToken = async (data: IRefreshToken): Promise<void> => {
        setStatus(LOADING);

        let responseCode: number;
        let responseData: IAccessToken;

        try {
            // Make an API request to generate a token
            const res = await TokenService.refresh(data);
            responseCode = res.status;
            responseData = res.data;
        } catch (err: any) {
            // If an error occurs, set default token values and HTTP status code
            responseData = { access: "" }
            responseCode = err?.response?.status;
        }

        // Map the HTTP status code to its corresponding action
        const result = STATUS_ACTIONS[responseCode];

        // Update the status and message based on the response code.
        setStatus(result.status);

        switch (result.status) {
            case SUCCESS:
                await refresh(responseData);
                break;
            case ERROR:
                setMessage(result.message);
                if (responseCode === 401) {
                    setMessage(ERROR_401_SESSION_EXPIRED);
                }
                break;
            default:
                setMessage("");
        }
    };

    return { status, message, generateAccessToken };
}

export default useRefreshToken;
