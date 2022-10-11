import "./showhero.css";
import phone from "../../Assets/images/phone.png";

const ShowHero = () => {
  return (
    <div className="showHero">
      <div className="showHero-container">
        <div className="showHero-img">
          <img src={phone} alt={phone} />
        </div>
        <div className="showHero-aside">
          <div className="showHero-head">
            <h3>Own your Food Space with Us</h3>
          </div>
          <div className="showHero-header">
            <h1>
              Showcase your <br /> business to different customers
            </h1>
          </div>
          <div className="showHero-body">
            <p>
              Ever thought of how to get customers to purchase the meals you
              cook? Proper Registration now, and get the chance to market your
              cooking skills and meals to the right audience who can purchase
              them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowHero;
