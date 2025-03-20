import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { CSSProperties, FC } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Styles for the unauthorized page component, defining its layout and visual appearance.
 */
const unauthorizePageStyle: SxProps<Theme> = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

/**
 * Styles for the image component, defining its size and max width.
 */
const image401Style: CSSProperties = {
    width: '100%',
    maxWidth: '500px'
}

/**
 * UnauthorizedPage component, responsible for displaying a 404 error page with navigation options.
 *
 * This component renders the error page content.
 */
const UnauthorizedPage: FC = () => {
    const navigate = useNavigate();

    /**
     * Handle the return button click event by navigating to the dashboard route.
     *
     * @param to The destination URL for navigation (in this case, '/dashboard').
     */
    const handleReturn = (to: string): void => {
        navigate(to);
    }

    return (
        <Box sx={unauthorizePageStyle}>
            <Stack spacing={2} alignItems="center">
                <img src="404.png" style={image401Style} alt="404" />
                <Typography variant="h4" fontWeight={100}>You are not authorized to access this page</Typography>
                <Button
                    variant="contained"
                    onClick={() => handleReturn("/dashboard")}
                >
                    Return
                </Button>
            </Stack>
        </Box>
    );
}

export default UnauthorizedPage;
