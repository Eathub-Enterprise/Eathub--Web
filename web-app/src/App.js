import "./Assets/styles/App.css";
import Homepage from "./Pages/Homepage";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./helper/isAuth/isAuth";

import Formpage from "./Pages/form/Formpage";
import BusinessForm from "./Components/BusinessForm/BusinessForm";
import PersonalForm from "./Components/PersonalForm/PersonalForm";
import Login from "./Pages/login/Login";
import DashboardPage from "./Pages/dashboard/DashboardPage";

// first layer of Routing is done here!
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        
        <Route path="signup" element={<Formpage />}>
          <Route index element={<PersonalForm />} />
          <Route path="business" element={<BusinessForm />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashboardPage />} />

        <Route element={<Protected />}>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
