import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IAuthContext, IAuthProvider } from "../@types/auth.context";
import useCookieStorage from "../hooks/common/useCookieStorage";
import useLocalStorage from "../hooks/common/useLocalStorage";
import { jwtDecode } from "jwt-decode";
import { deHash, hash } from "../utils/mask";
import { IAccessToken, ITokenPair } from "../@types/token";

// Create a context for authentication, initialized with undefined.
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

/**
 * The AuthProvider component wraps the application with authentication state management.
 * It provides the necessary functionality for logging in and out, as well as refreshing access tokens.
 */
export const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [accessToken, setAccessToken] = useCookieStorage("access", null);
    const [refreshToken, setRefreshToken] = useCookieStorage("refresh", null);

    const [tokenId, setTokenId] = useCookieStorage("token", null);

    const [role, setRole] = useState<string>("");

    useEffect(() => {
        if (accessToken) {
            const access = deHash(accessToken, tokenId);
            const strAccess = access as string;
            const userRole = jwtDecode<{ role: string }>(strAccess)?.role;
            setRole(userRole);
        }
    }, [accessToken, tokenId]);

    /**
     * Login function to authenticate a user using their provided token pair.
     *
     * @param {ITokenPair} data The token pair containing the access and refresh tokens.
     */
    const login = useCallback(async (data: ITokenPair) => {
        const jti = jwtDecode<{ jti: string }>(data.access)?.jti;

        setTokenId(jti);
        setAccessToken(hash(data.access, jti));
        setRefreshToken(hash(data.refresh, jti));
    }, [setAccessToken, setRefreshToken, setTokenId]);

    /**
     * Logout function to clear all authentication data from storage after a successful login.
     */
    const logout = useCallback(async () => {
        setTokenId(null);

        setAccessToken(null);
        setRefreshToken(null);

        localStorage.clear();
    }, [setAccessToken, setRefreshToken, setTokenId]);

    /**
     * Refresh function to obtain a new access token using the provided refresh token.
     *
     * @param {IAccessToken} data The refresh token to use for obtaining a new access token.
     */
    const refresh = useCallback(async (data: IAccessToken) => {
        const jti = jwtDecode<{ jti: string }>(data.access)?.jti;

        setTokenId(jti);
        setAccessToken(hash(data.access, jti));
    }, [setAccessToken]);

    /**
     * Memoized function to create the authentication context 
     * value object containing all necessary data and functions.
     */
    const value = useMemo(() => (
        {
            accessToken,
            refreshToken,
            tokenId,
            role,
            login,
            logout,
            refresh
        }
    ), [accessToken, refreshToken, tokenId, role, login, logout, refresh]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to access the authentication context within an AuthProvider component.
 */
export const useAuthContext = (): IAuthContext => {
    const context = useContext(AuthContext);

    // If no context is available, throw an error indicating it must be used within an AuthProvider component.
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
