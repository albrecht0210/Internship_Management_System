import { RouteObject } from "react-router-dom";
import EmployeeDashboardPage from "../../../pages/employee/DashboardPage";

const EmployeeDashboardRoute: RouteObject = {
    path: 'dashboard',
    element: <EmployeeDashboardPage />
}

export default EmployeeDashboardRoute;
