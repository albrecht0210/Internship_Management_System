import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute: FC = ({ }) => {
    const { accessToken } = useAuthContext();

    if (!accessToken) {
        return <Navigate to="/login" replace />
    }

    if () {
        return <Navigate to="/unauthorize" replace />
    }

    return <Outlet />
}