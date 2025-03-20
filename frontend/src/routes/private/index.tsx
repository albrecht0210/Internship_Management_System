import { RouteObject } from "react-router-dom";
import AdminRoutes from "./admin";
import InternRoutes from "./intern";
import RoleBasedRedirect from "./RoleBasedRedirect";
import EmployeeRoutes from "./employee";
import PrivateLayout from "../../layouts/PrivateLayout";

const PrivateRoutes: RouteObject = {
    path: 'ollopa',
    element: <PrivateLayout />,
    children: [
        {
            index: true,
            element: <RoleBasedRedirect />
        },
        AdminRoutes,
        EmployeeRoutes,
        InternRoutes,
    ]
}

export default PrivateRoutes;
