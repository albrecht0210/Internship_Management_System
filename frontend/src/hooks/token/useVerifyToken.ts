import { useState } from "react";
import TokenService from "../../services/TokenService";
import { IVerifyTokenHook } from "../../@types/hook";
import { IDLE, LOADING, STATUS_ACTIONS } from "../../utils/constant";
import { IToken } from "../../@types/token";

/**
 * Custom hook to verify tokens.
 *
 * @returns {IVerifyTokenHook} An object containing the current token status, message, and a function to verify a token.
 */
const useVerifyToken = (): IVerifyTokenHook => {
    const [status, setStatus] = useState<string>(IDLE);
    const [message, setMessage] = useState<string>("");

    /**
     * Verifies a token based on the provided data and returns a promise that resolves when complete.
     *
     * @param {IToken} data The IToken object used to verify the token.
     */
    const verifyToken = async (data: IToken): Promise<void> => {
        setStatus(LOADING);

        let responseCode: number;

        try {
            // Make an API request to verify a token
            const res = await TokenService.verify(data);
            responseCode = res.status;
        } catch (err: any) {
            responseCode = err?.response?.status;
        }

        // Map the response code to a corresponding status message.
        const result = STATUS_ACTIONS[responseCode];

        // Update the status and message based on the response code.
        setStatus(result.status);
        setMessage(result.message);
    };

    return { status, message, verifyToken };
}

export default useVerifyToken;
