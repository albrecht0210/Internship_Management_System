import { Box, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";

const footerStyle: SxProps<Theme> = {
    height: '50px',
    backgroundColor: '#292C52',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Footer: FC = () => {
    return (
        <Box sx={footerStyle}>
            <Typography color="white" fontWeight="bold">OLLOPA CORPORATION</Typography>
        </Box>
    );
}

export default Footer;
