import './Assets/styles/App.css';
import Homepage from './Pages/Homepage';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Formpage from './Pages/form/Formpage';
import DashboardPage from './Pages/dashboard/DashboardPage';
import OrdersPage from './Pages/orders/OrdersPage';
import MenuPage from './Pages/menu/MenuPage';
import AnalyticsPage from './Pages/analytics/AnalyticsPage';
import MessagePage from './Pages/message/MessagePage';
import SettingsPage from './Pages/settiings/SettingsPage';
import PayoutPage from './Pages/payouts/PayoutPage';


// first layer of Routing is done here!
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="signup" element={<Formpage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="payout" element={<PayoutPage />} />
          
        </Routes>
        
      </BrowserRouter>
    )
  };
}

export default App;
