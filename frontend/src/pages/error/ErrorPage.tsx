import { Box, Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import { CSSProperties, FC } from "react";
import { useNavigate } from "react-router-dom";

const errorPageStyle: SxProps<Theme> = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const image404Style: CSSProperties = {
    width: '100%',
    maxWidth: '500px'
}

const ErrorPage: FC = () => {
    const navigate = useNavigate();

    const handleReturn = (to: string): void => {
        navigate(to);
    }

    return (
        <Box sx={errorPageStyle}>
            <Stack spacing={2} alignItems="center">
                <img src="404.png" style={image404Style} alt="404" />
                <Typography variant="h4" fontWeight={100}>Sorry, page not found</Typography>
                <Button
                    variant="contained"
                    onClick={() => handleReturn("/")}
                >
                    Return
                </Button>
            </Stack>
        </Box>
    );
}

export default ErrorPage;
