/**
 * A generic interface for any type of token, including access and refresh tokens.
 */
export interface IToken {
    token: string;
}

/**
 * An interface representing a pair of tokens, including access and refresh tokens.
 */
export interface ITokenPair {
    access: string;
    refresh: string;
}

/**
 * An interface representing an access token pair.
 */
export interface IAccessToken {
    access: string;
}

/**
 * An interface representing a refresh token pair.
 */
export interface IRefreshToken {
    refresh: string;
}
