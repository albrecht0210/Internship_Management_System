import { ReactNode } from "react";
import { IAccessToken, ITokenPair } from "./token";

/**
 * An interface representing the authentication context, which provides methods for managing access tokens and 
 * refreshing the token.
 */
export interface IAuthContext {
    accessToken: string | null;
    refreshToken: string | null;
    tokenId: string | null;
    role: string | null;
    login: (data: ITokenPair) => Promise<void>;
    logout: () => Promise<void>;
    refresh: (data: IAccessToken) => Promise<void>;
}

/**
 * An interface representing the authentication provider, which is used to wrap a React component with
 * authentication-related functionality.
 */
export interface IAuthProvider {
    children: ReactNode;
}
