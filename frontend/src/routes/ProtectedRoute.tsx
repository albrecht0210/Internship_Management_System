import { FC, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { IProtectedRoute } from "../@types/route";

const ProtectedRoute: FC<IProtectedRoute> = ({ allowedRoles }) => {
    const { accessToken, role } = useAuthContext();

    const [userRole, setUserRole] = useState<string>(role as string);
    console.log(role);

    useEffect(() => {
        if (role !== null) {
            setUserRole(role as string);
        }
    }, [userRole, role]);

    if (!accessToken) {
        return <Navigate to="/login" replace />
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/ollopa/unauthorize" replace />
    }

    return <Outlet />
}

export default ProtectedRoute;
