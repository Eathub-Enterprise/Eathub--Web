import "./Assets/styles/App.css";
import Homepage from "./Pages/Homepage";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Formpage from "./Pages/form/Formpage";
import BusinessForm from "./Components/BusinessForm/BusinessForm";
import PersonalForm from "./Components/PersonalForm/PersonalForm";
import Login from "./Pages/login/Login";
import DashboardPage from "./Pages/dashboard/DashboardPage";

import Overview from "./Pages/dashboard/pages/overview/Overview";
import Order from "./Pages/dashboard/pages/order/Order";
import Menu from "./Pages/dashboard/pages/menu/Menu";
import Analytics from "./Pages/dashboard/pages/analytics/Analytics";
import Message from "./Pages/dashboard/pages/message/Message";
import Settings from "./Pages/dashboard/pages/settings/Settings";
import ProtectedRoute from "./helper/requireAuth";

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

          <Route path="dashboard" element={<DashboardPage />}>
            <Route index element={<Overview />} />
            <Route path="orders" element={<Order />} />
            <Route path="menu" element={<Menu />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="message" element={<Message />} />
            <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
