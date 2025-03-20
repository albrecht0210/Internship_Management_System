import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { FC } from "react";
import RootLayout from "../layouts/RootLayout";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";
import AuthRedirect from "./AuthRedirect";

const AppRouter: FC = () => {
    const AppRoutes: RouteObject[] = [
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <AuthRedirect />
                },
                PublicRoutes,
                PrivateRoutes
            ]
        }
    ]

    const router = createBrowserRouter(AppRoutes);

    return <RouterProvider router={router} />;
}

export default AppRouter;
