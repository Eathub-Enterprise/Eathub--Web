import './Assets/styles/App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './layouts/Navbar/Navbar';


// first layer of Routing is done here!
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    </>
  );
}

export default App;
