import "./deliveryHero.css";
import bike from "../../Assets/images/deliveryBike.png";
// import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const DeliveryHero = () => {
  return (
    <div className="deliveryHero">
      <div className="deliveryHero-container">
        <div className="deliveryHero-img">
          <img loading="lazy" src={bike} alt={bike} />
        </div>
        <div className="deliveryHero-aside">
          <div className="deliveryHero-head">
            <h3>Food Delivery</h3>
          </div>
          <div className="deliveryHero-header">
            <p>Best service to fulfill your expectations</p>
          </div>
          <div className="deliveryHero-body">
            <p>
              It’s not just about bringing you good food from your favourite
              restaurant. It’s about forming a connection.
            </p>
          </div>
          <div className="deliveryHero-btn">
            <button>
              <span className="text">Place Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryHero;
