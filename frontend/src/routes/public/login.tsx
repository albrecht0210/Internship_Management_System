import { RouteObject } from "react-router-dom";
import LoginPage from "../../pages/auth/LoginPage";

const LoginRoute: RouteObject = {
    path: 'login',
    element: <LoginPage />
}

export default LoginRoute;
