import { Box, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";

// Define a style object for the footer component
const footerStyle: SxProps<Theme> = {
    height: '50px',
    backgroundColor: '#292C52',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

// Define the Footer component, which is a functional React component (FC)
const Footer: FC = () => {
    return (
        <Box sx={footerStyle}>
            <Typography color="white" fontWeight="bold">OLLOPA CORPORATION</Typography>
        </Box>
    );
}

export default Footer;
