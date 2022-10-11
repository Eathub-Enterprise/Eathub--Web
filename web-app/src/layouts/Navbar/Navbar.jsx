import * as React from 'react';
import { AppBar, Toolbar, styled, Box, Tooltip } from '@mui/material';
import './navbar.css';
import e from '../../Assets/images/logo 1.png';
import text from '../../Assets/images/athub.png';
import LoginIcon from '@mui/icons-material/Login';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between",
});

const Bar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
    color:"#FF8323"
}));


const Navbar = () => {
    return (
        <AppBar maxWidth="xl" color="inherit" position="sticky">
            <StyledToolbar>
                <div className="navbar-link-wrapper">
                    <img src={e} alt={e} className="large-e" />
                    <img src={text} alt={text} />
                </div>
                <Bar sx={{display: {xs:"block", sm:"none"}}}>
                    <Tooltip title="Sign Up">
                        <LoginIcon />
                    </Tooltip>
                    <Tooltip title="Download Mobile App">
                        <DownloadForOfflineRoundedIcon />
                    </Tooltip>
                </Bar>
                <Bar sx={{display: {xs:"none", sm:"block"}}}>
                    <button className="btn-outline">
                        Sign Up
                    </button>
                    <button className="btn-contained">
                        Download
                    </button>
                </Bar>
            </StyledToolbar>
        </AppBar>
     );
}

export default Navbar; 