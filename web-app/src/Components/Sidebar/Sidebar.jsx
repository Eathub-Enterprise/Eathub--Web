import './sidebar.css';
import {
    FaThLarge,
    FaCartPlus,
    FaSpa,
    FaEnvelope,
    FaMoneyBill,
} from "react-icons/fa"
import e from '../../Assets/images/white logo.png';
import text from '../../Assets/images/athub-white.png';
import { Navigate, NavLink } from 'react-router-dom';


 
const Sidebar = ({children}) => {
    const handleLogOut = () => {
        localStorage.clear();
    }
    const menuItem=[
        {
            path: "/dashboard",
            name: 'Dashboard',
            icon: <FaThLarge/>
        },
        {
            path: "/dashboard/orders",
            name: 'Orders',
            icon: <FaCartPlus/>
        },
        {
            path: "/dashboard/menu",
            name: 'Menu',
            icon: <FaSpa/>
        },
        // {
        //     path: "/dashboard/analytics",
        //     name: 'Analytics',
        //     icon: <FaChartLine/>
        // },
        {
            path: "/dashboard/message",
            name: 'Message',
            icon: <FaEnvelope/>
        },
        // {
        //     path: "/dashboard/settings",
        //     name: 'Settings',
        //     icon: <FaCog/>
        // },
        {
            path: "/dashboard/payouts",
            name: 'Payouts',
            icon: <FaMoneyBill/>
        },
    ]
    return ( 
        <div className='container'>
            <div className='sidebar'>
                <div className='top-section'>
                <img loading='lazy' src={e} alt={e} className="Logo" />
                    <img loading='lazy'src={text} alt={text} />
                </div>
                {
                    menuItem.map((item)=>(
                        <NavLink to={item.path} key={item.name} className="link" activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <div className='link-text'>{item.name}</div>
                        </NavLink>
                    ))
                }
                <button onClick={handleLogOut} className='sidebar-button'>
                    LogOut
                </button>
            </div>
            <main>{children}</main>
        </div>
     );
}

export default Sidebar;