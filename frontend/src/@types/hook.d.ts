import { ICredentials, IRefreshToken, IToken } from "./token"

// Interface representing a custom hook that can be used to track the status of an operation.
interface ICustomHook {
    status: string,
    message: string | undefined
}

/**
 * Interface extending ICustomHook, providing additional functionality for generating tokens.
 */
export interface ITokenHook extends ICustomHook {
    generateToken: (credential: ICredentials) => Promise<void>
}

/**
 * Interface extending ICustomHook, providing additional functionality for refreshing tokens.
 */
export interface IRefreshTokenHook extends ICustomHook {
    generateAccessToken: (data: IRefreshToken) => Promise<void>
}

/**
 * Interface extending ICustomHook, providing additional functionality for verifying tokens.
 */
export interface IVerifyTokenHook extends ICustomHook {
    verifyToken: (data: IToken) => Promise<void>
}
