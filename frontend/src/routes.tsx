import { createBrowserRouter, createRoutesFromElements, Route, RouteObject, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./features/404/ErrorPage";
import LoginPage from "./features/login/LoginPage";
import { FC } from "react";

const UrlRouter: FC = () => {
    const routes: RouteObject[] = createRoutesFromElements(
        <Route
            id="rootLayout"
            path="/"
            element={<RootLayout />}
            errorElement={<ErrorPage />}
        >
            <Route
                id="loginPage"
                index
                element={<LoginPage />}
            />
        </Route>
    )

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
}

export default UrlRouter;
