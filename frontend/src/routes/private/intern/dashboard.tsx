import { RouteObject } from "react-router-dom";
import InternDashboardPage from "../../../pages/intern/DashboardPage";

const InternDashboardRoute: RouteObject = {
    path: 'dashboard',
    element: <InternDashboardPage />
}

export default InternDashboardRoute;
