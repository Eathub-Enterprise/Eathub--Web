import './Assets/styles/App.css';
import Navbar from './layouts/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import InfoHero from './Components/Infohero/InfoHero';

// first layer of Routing is done here!
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <InfoHero />
    </>
  );
}

export default App;
