import { FC } from "react";
import LogoutButton from "../../components/LogoutButton";

/**
 * InternDashboard component, responsible for displaying an intern dashboard.
 *
 * This component renders the dashboard content.
 */
const InternDashboardPage: FC = () => {
    return (
        <div>
            InternDashboard
            <LogoutButton />
        </div>
    );
}

export default InternDashboardPage;
