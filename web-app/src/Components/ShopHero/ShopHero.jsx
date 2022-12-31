import './shopHero.css';
import background from '../../Assets/images/shopHero-img.png';
// import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';



const ShopHero = () => {
    return ( 
        <div className="shopHero">
            <div className="shopHero-container">
                <div className="shopHero-img">
                    <img loading='lazy' src={background} alt={background} />
                </div>
                <div className="shopHero-aside">
                    <div className="shopHero-header">
                        <h1>Purchase Meals from Various Vendors</h1>
                    </div>
                    <div className="shopHero-body">
                        <p>
                        Order food from the best restaurants, local favorites, and online vendors using the app or web.
                        </p>
                    </div>
                    <div className="shopHero-btn">
                        <button>
                            <span className="text">
                            Place Order
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ShopHero;