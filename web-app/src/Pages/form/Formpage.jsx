import './formpage.css';
import PersonalForm from '../../Components/PersonalForm/PersonalForm';
import background from '../../Assets/images/formbackground.png';
import BusinessForm from '../../Components/BusinessForm/BusinessForm';

export default function Formpage() {
    return (
        <div className="Formpage">
            <div className="Formpage-main">
                <aside className="Formpage-img">
                    <img src={background} alt={background} />
                </aside>
                <aside className="Formpage-comp">
                    {/* Conditional Rendering */}
                    {/* <PersonalForm /> */}
                    <BusinessForm />
                </aside>
            </div>
        </div>
    )
}