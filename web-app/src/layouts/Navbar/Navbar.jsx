import { AppBar, Toolbar } from '@mui/material';
import './navbar.css';
import e from '../../Assets/images/logo 1.png';
import text from '../../Assets/images/athub.png';

const Navbar = () => {
    return ( 
        <AppBar maxWidth="sm" className="navbar-wrapper" position="sticky">
            <Toolbar>
            <main className="navbar-inner">
                <div className="navbar-icon">
                    <div className="navbar-icon-wrapper">
                    <img src={e} alt={e} />
                    <img src={text} alt={text} />
                    </div>
                </div>
                <div className="navbar-link">
                    <div className="navbar-link-wrapper">
                        <button className="navbar-btn">
                            Sign Up
                        </button>
                        <button className="navbar-btn-filled">
                            Download
                        </button>
                    </div>
                </div>
            </main>
            </Toolbar>
        </AppBar>
     );
}

export default Navbar; 