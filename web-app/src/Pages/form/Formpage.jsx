import './formpage.css';
import background from '../../Assets/images/formbackground.png';
import { Link, Outlet} from 'react-router-dom';

export default function Formpage() {
    return (
        <div className="Formpage">
            <div className="Formpage-main">
                <aside className="Formpage-img">
                    <img loading='lazy' src={background} alt={background} />
                </aside>
                <aside className="Formpage-comp">
                    <Outlet />
                </aside>
            </div>
        </div>
    )
}