import { RouteObject } from "react-router-dom";
import AdminDashboardPage from "../../../pages/admin/DashboardPage";

const AdminDashboardRoute: RouteObject = {
    path: 'dashboard',
    element: <AdminDashboardPage />
}

export default AdminDashboardRoute;
