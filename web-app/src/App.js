import './Assets/styles/App.css';
import Homepage from './Pages/Homepage';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Formpage from './Pages/form/Formpage';
import BusinessForm from './Components/BusinessForm/BusinessForm';
import PersonalForm from './Components/PersonalForm/PersonalForm';
import { Dashboard } from './Pages/dashboard/Dashboard';


// first layer of Routing is done here!
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="signup" element={<Formpage />}>
            <Route index element={<PersonalForm />} />
            <Route path="business" element={<BusinessForm />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        
      </BrowserRouter>
    )
  };
}

export default App;
