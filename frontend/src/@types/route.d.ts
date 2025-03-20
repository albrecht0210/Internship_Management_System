/**
 * An interface representing a private route configuration, which specifies the roles required to access the route.
 */
export interface IProtectedRoute {
    allowedRoles: string[];
}
