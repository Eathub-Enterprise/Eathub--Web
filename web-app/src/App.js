import './Assets/styles/App.css';
import Homepage from './Pages/Homepage';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Formpage from './Pages/form/Formpage';


// first layer of Routing is done here!
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="signup" element={<Formpage />} />
        </Routes>
      </BrowserRouter>
    )
  };
}

export default App;
