export interface ICredentials {
    email: string;
    password: string;
}

export interface ITokenCredential {
    token: string;
}

export interface IRefreshCredential {
    refresh: string;
}

export interface ITokenResponse {
    accessToken: string;
    refreshToken: string;
}