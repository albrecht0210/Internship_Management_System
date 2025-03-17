import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: FC = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    );
}

export default RootLayout;
