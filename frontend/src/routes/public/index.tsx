import { RouteObject } from "react-router-dom";
import ErrorRoute from "./error";
import LoginRoute from "./login";
import PublicLayout from "../../layouts/PublicLayout";

const PublicRoutes: RouteObject = {
    path: '/',
    element: <PublicLayout />,
    children: [
        LoginRoute,
        ErrorRoute
    ]
}

export default PublicRoutes;
