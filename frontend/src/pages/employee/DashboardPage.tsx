import { FC } from "react";
import LogoutButton from "../../components/LogoutButton";

/**
 * EmployeeDashboard component, responsible for displaying an staff dashboard.
 *
 * This component renders the dashboard content.
 */
const EmployeeDashboardPage: FC = () => {
    return (
        <div>
            EmployeeDashboard
            <LogoutButton />
        </div>
    );
}

export default EmployeeDashboardPage;
