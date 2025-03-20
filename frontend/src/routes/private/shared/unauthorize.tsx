import { RouteObject } from "react-router-dom";
import UnauthorizedPage from "../../../pages/error/UnauthorizedPage";

const UnauthorizeRoute: RouteObject = {
    path: 'unauthorize',
    element: <UnauthorizedPage />
}

export default UnauthorizeRoute;
