import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AuthRedirect: FC = () => {
    const { accessToken } = useAuthContext();

    if (!accessToken) {
        return <Navigate to="/login" replace />
    }

    return <Navigate to="/ollopa" replace />
}

export default AuthRedirect;
