import "./Assets/styles/App.css";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";

// first layer of Routing is done here!
function App() {
  return (
    <div className="App">
      <Navbar />
   
      <Footer />
    </div>
  );
}

export default App;
