import { Navigate, RouteObject } from "react-router-dom";
import ProtectedRoute from "../../ProtectedRoute";
import AdminDashboardRoute from "./dashboard";
import UnauthorizeRoute from "../shared/unauthorize";

const AdminRoutes: RouteObject = {
    path: 'admin',
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
        {
            index: true,
            element: <Navigate to="dashboard" replace />
        },
        AdminDashboardRoute,
    ]
}

export default AdminRoutes;
