import { Navigate, RouteObject } from "react-router-dom";
import ProtectedRoute from "../../ProtectedRoute";
import InternDashboardRoute from "./dashboard";

const InternRoutes: RouteObject = {
    path: 'intern',
    element: <ProtectedRoute allowedRoles={['intern']} />,
    children: [
        {
            index: true,
            element: <Navigate to="dashboard" replace />
        },
        InternDashboardRoute,
    ]
}

export default InternRoutes;
