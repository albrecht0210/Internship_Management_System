import { RouteObject } from "react-router-dom";
import ErrorPage from "../../pages/error/ErrorPage";

const ErrorRoute: RouteObject = {
    path: '404',
    element: <ErrorPage />
}

export default ErrorRoute;
