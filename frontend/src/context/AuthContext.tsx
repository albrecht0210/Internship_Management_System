import { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";
import { IAuthContext, IAuthProvider } from "../@types/auth";
import useCookieStorage from "../hooks/common/useCookieStorage";
import useLocalStorage from "../hooks/common/useLocalStorage";
import { jwtDecode } from "jwt-decode";
import { hash } from "../utils/mask";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [accessToken, setAccessToken] = useCookieStorage("accessToken", null);
    const [refreshToken, setRefreshToken] = useCookieStorage("refreshToken", null);
    const [tokenId, setTokenId] = useLocalStorage<string | null>("tokenId", null);

    const login = async (data: { access: string; refresh: string }) => {
        const jti = jwtDecode<{ jti: string }>(data.access)?.jti;
        setTokenId(jti);
        setAccessToken(hash(data.access, jti));
        setRefreshToken(hash(data.refresh, jti));
    };

    const logout = async () => {
        setTokenId(null);
        setAccessToken(null);
        setRefreshToken(null);
    };

    const refresh = async (data: { access: string }) => {
        const jti = jwtDecode<{ jti: string }>(data.access)?.jti;
        setAccessToken(hash(data.access, jti));
    };

    const value = useMemo(() => (
        {
            accessToken,
            refreshToken,
            tokenId,
            login,
            logout,
            refresh
        }
    ), [accessToken, refreshToken, tokenId]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
