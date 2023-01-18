import './downloadHero.css';
import phone from '../../Assets/images/phoneUI.png';
import google from '../../Assets/images/Google.png';
import apple from '../../Assets/images/Apple.png';


const DownloadHero = () => {
  return (
    <div className="downloadHero">
      <div className="downloadHero-container">
        <div className="downloadHero-body">
          <div className="downloadHero-Header">
            <h1>Download<br /> Eat<span className='special'>Hub</span> Mobile App</h1>
          </div>
          <div className="downloadHero-btn">
            <img loading='lazy' src={google} alt={google} />
            <img loading='lazy' src={apple} alt={apple} />
          </div>
          <div className="downloadHero-text">
            <p>...or click here to download directly</p>
          </div>
        </div>
        <div className="downloadHero-img">
        <img loading='lazy' src={phone} alt={phone} />
        </div>
      </div>
    </div>
  );
};

export default DownloadHero;
