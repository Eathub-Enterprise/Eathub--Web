import "./shopHero.css";
import background from "../../Assets/images/shopHero-img.png";
// import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

const ShopHero = () => {
  return (
    <div className="shopHero">
      <div className="shopHero-container">
        <div className="shopHero-img">
          <img loading="lazy" src={background} alt={background} />
        </div>
        <div className="shopHero-aside">
          <div className="shopHero-header">
            <p>Buy our food from different stores</p>
          </div>
          <div className="shopHero-body">
            <p>
              Eathub automatically provides the nearest available food
              Restaurant and cooking services of your choice. Feed your eyes on
              not just aesthetically pleasing but various delicious meals.
            </p>
          </div>
          <div className="shopHero-btn">
            <button>
              <span className="text">Place Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
