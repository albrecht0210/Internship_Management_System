import { FC } from "react";
import LogoutButton from "../../components/LogoutButton";

/**
 * AdminDashboard component, responsible for displaying an admin dashboard.
 *
 * This component renders the dashboard content.
 */
const AdminDashboardPage: FC = () => {
    return (
        <div>
            AdminDashboard
            <LogoutButton />
        </div>
    );
}

export default AdminDashboardPage;
