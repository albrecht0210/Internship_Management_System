import { Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import Footer from "../../components/Footer";
import LoginCard from "./components/LoginCard";
import Grid from '@mui/material/Grid2';

/**
 * Styles for the login page.
 */
const loginPageStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
}

/**
 * Styles for the main body of the login page.
 */
const bodyStyle: SxProps<Theme> = {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
}

/**
 * Login page component.
 *
 * This component renders the login form and layout.
 */
const LoginPage: FC = () => {
    return (
        <Box sx={loginPageStyle}>
            <Grid container sx={bodyStyle}>
                <Grid size={{ xs: 1, sm: 2, md: 3, lg: 4 }}></Grid>
                <Grid size={{ xs: 10, sm: 8, md: 6, lg: 4 }}>
                    <LoginCard />
                </Grid>
                <Grid size={{ xs: 1, sm: 2, md: 3, lg: 4 }}></Grid>
            </Grid>
            <Footer />
        </Box>
    );
}

export default LoginPage;
