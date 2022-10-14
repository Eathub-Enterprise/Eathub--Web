import './Assets/styles/App.css';
import Homepage from './Pages/Homepage';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// first layer of Routing is done here!
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    )
  };
}

export default App;
