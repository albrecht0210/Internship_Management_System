import { Navigate, RouteObject } from "react-router-dom";
import ProtectedRoute from "../../ProtectedRoute";
import EmployeeDashboardRoute from "./dashboard";
import UnauthorizeRoute from "../shared/unauthorize";

const EmployeeRoutes: RouteObject = {
    path: 'employee',
    element: <ProtectedRoute allowedRoles={['employee']} />,
    children: [
        {
            index: true,
            element: <Navigate to="dashboard" replace />
        },
        EmployeeDashboardRoute,
    ]
}

export default EmployeeRoutes;
