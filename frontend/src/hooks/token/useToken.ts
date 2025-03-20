import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext"
import { ERROR, ERROR_401_LOGIN, IDLE, LOADING, STATUS_ACTIONS, SUCCESS } from "../../utils/constant";
import { ITokenPair } from "../../@types/token";
import TokenService from "../../services/TokenService";
import { ITokenHook } from "../../@types/hook";
import { ICredentials } from "../../@types/form";

/**
 * Custom hook for managing token authentication.
 *
 * @returns {ITokenHook} An object containing the current token status, message, and a function to generate a new token.
 */
const useToken = (): ITokenHook => {
    // Extract the login function from the auth context
    const { login } = useAuthContext();

    const [status, setStatus] = useState<string>(IDLE);
    const [message, setMessage] = useState<string>("");

    /**
     * Generates a new token using the provided credentials.
     *
     * @param {ICredentials} credential An object containing user's information (ICredentials).
     */
    const generateToken = async (credential: ICredentials): Promise<void> => {
        setStatus(LOADING);
        setMessage("");

        let responseCode: number;
        let responseData: ITokenPair;

        try {
            // Make an API request to generate a token
            const res = await TokenService.token(credential);
            responseCode = res.status;
            responseData = res.data;
        } catch (err: any) {
            // If an error occurs, set default token values and HTTP status code
            responseData = { access: "", refresh: "" } // dummy
            responseCode = err?.response?.status;
        }

        // Map the HTTP status code to its corresponding action
        const result = STATUS_ACTIONS[responseCode];

        // Update the status and message based on the response code.
        setStatus(result.status);

        switch (result.status) {
            case SUCCESS:
                await login(responseData);
                break;
            case ERROR:
                setMessage(result.message);
                if (responseCode === 401) {
                    setMessage(ERROR_401_LOGIN);
                }
                break;
            default:
                setMessage("");
        }
    };

    return { status, message, generateToken };
}

export default useToken;
