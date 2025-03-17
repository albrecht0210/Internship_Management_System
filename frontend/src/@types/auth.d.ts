import { ReactNode } from "react";

export interface IAuthContext {
    accessToken: string | null;
    refreshToken: string | null;
    tokenId: string | null;
    login: (data: { access: string; refresh: string }) => Promise<void>;
    logout: () => Promise<void>;
    refresh: (data: { access: string }) => Promise<void>;
}

export interface IAuthProvider {
    children: ReactNode;
}
