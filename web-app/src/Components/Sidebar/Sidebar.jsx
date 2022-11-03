import './sidebar.css';
import {
    FaThLarge,
    FaCartPlus,
    FaSpa,
    FaChartLine,
    FaEnvelope,
    FaCog,
} from "react-icons/fa"
import e from '../../Assets/images/white logo.png';
import text from '../../Assets/images/athub-white.png';
import { NavLink } from 'react-router-dom';


 
const Sidebar = ({children}) => {
    const menuItem=[
        {
            path: "/dashboard",
            name: 'Dashboard',
            icon: <FaThLarge/>
        },
        {
            path: "/orders",
            name: 'Orders',
            icon: <FaCartPlus/>
        },
        {
            path: "/menu",
            name: 'Menu',
            icon: <FaSpa/>
        },
        {
            path: "/analytics",
            name: 'Analytics',
            icon: <FaChartLine/>
        },
        {
            path: "/message",
            name: 'Message',
            icon: <FaEnvelope/>
        },
        {
            path: "/settings",
            name: 'Settings',
            icon: <FaCog/>
        },
    ]
    return ( 
        <div className='container'>
            <div className='sidebar'>
                <div className='top-section'>
                <img src={e} alt={e} className="Logo" />
                    <img src={text} alt={text} />
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='link-text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
     );
}

export default Sidebar;