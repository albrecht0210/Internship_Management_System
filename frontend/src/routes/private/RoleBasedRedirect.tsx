import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { ADMIN_ROLE, INTERN_ROLE, STAFF_ROLE } from "../../utils/constant";

const RoleBasedRedirect: FC = () => {
    const { role } = useAuthContext();

    switch (role) {
        case INTERN_ROLE:
            return <Navigate to="intern" replace />;
        case STAFF_ROLE:
            return <Navigate to="staff" replace />;
        case ADMIN_ROLE:
            return <Navigate to="admin" replace />;
        default:
            return <Navigate to="ollopa/unauthorize" replace />
    }
}

export default RoleBasedRedirect;
