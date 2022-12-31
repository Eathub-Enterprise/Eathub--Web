import './infohero.css';
import info1 from '../../Assets/images/info1.png';
import info2 from '../../Assets/images/info2.png';
import info3 from '../../Assets/images/info3.png';

const InfoHero = () => {
    return ( 
        <div className="infoHero">
            <div className="infoHero-wrapper">
                {/* reminder to convert this to a reusable component*/}

                <div className="infoHero-box">
                    <div className="infoHero-icon">
                        <img loading='lazy' src={info1} alt={info1} />
                    </div>
                    <div className="infoHero-box-text">
                        <div className="infoHero-box-header">
                            <h1>Easy Order</h1>
                        </div>
                        <div className="infoHero-box-body">
                            <p>We build an amazing experience with every user to personalize every meal to their taste.</p>
                        </div>
                    </div>
                </div>

                <div className="infoHero-box">
                    <div className="infoHero-icon">
                        <img loading='lazy' src={info2} alt={info2} />
                    </div>
                    <div className="infoHero-box-text">
                        <div className="infoHero-box-header">
                            <h1>Quick Delivery</h1>
                        </div>
                        <div className="infoHero-box-body">
                            <p>Fully focused on making sure every ordered meal delivered on schedule easily.</p>
                        </div>
                    </div>
                </div>

                <div className="infoHero-box">
                    <div className="infoHero-icon">
                        <img loading='lazy' src={info3} alt={info3} />
                    </div>
                    <div className="infoHero-box-text">
                        <div className="infoHero-box-header">
                            <h1>Online Kitchen</h1>
                        </div>
                        <div className="infoHero-box-body">
                            <p>Fully focused on making sure every ordered meal gets prepared and delivered on schedule easily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default InfoHero;