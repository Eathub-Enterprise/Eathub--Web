import Img from '../../Assets/images/image 45.jpg';
import './membership.css';

const Membership = () => {
    return ( 
        <div className="membership-container">
            <div className="membership-img">
                <img src={Img} alt={Img} />
                <div className="membership-content">
                    <div className="membership-content-section">
                        <div className="membership-header">
                            <h1>Join Eathub Membership and get discount up to 30%</h1>
                        </div>
                        <div className="membership-text-body">
                            <p></p>
                        </div>
                        <div className="membership-input">
                            <input type="email" name="" id="" placeholder="Enter Your Email Here" />
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Membership;