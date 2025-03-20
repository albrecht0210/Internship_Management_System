import { Button } from "@mui/material";
import { FC } from "react";
import { useAuthContext } from "../context/AuthContext";

// Define a functional component for the Logout button
const LogoutButton: FC = () => {
    // Use the useAuthContext hook to access the logout function
    const { logout } = useAuthContext();

    return (
        <Button onClick={() => logout()}>Logout</Button>
    );
}

export default LogoutButton;
