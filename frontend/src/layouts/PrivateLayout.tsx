import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateLayout: FC = () => {
    const { accessToken } = useAuthContext();

    if (!accessToken) {
        return <Navigate to="/" replace />
    }

    return <Outlet />;
}

export default PrivateLayout;
