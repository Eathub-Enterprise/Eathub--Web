import './hero.css';
import { Box } from '@mui/material';
import background from '../../Assets/images/emy-XoByiBymX20-unsplash 1.jpg';

const Hero = () => {
    return ( 
        <Box className="hero-section">
            <img src={background} alt={background} className="hero-background" />
            <div className="hero-container">
                <div className="hero-header">
                    <span>
                        Discover Restaurants <br />& Delicious meal.
                    </span>
                </div>
                <div className="hero-subheader">
                    <span>
                        Delicious Meals Delivered to your door once you place an order from anywhere in Lagos with an hour delivery time.
                    </span>
                </div>
                <div className="hero-input">
                    <div className="hero-input-wrapper">
                    <input type="search" className="hero-search" placeholder='Meals & food plugs around you' />
                    {/* <button> Search</button> */}
                    </div>
                </div>
            </div>
        </Box>
     );
}

export default Hero;