import React, { lazy, Suspense } from "react";
import "./Assets/styles/App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Formpage from "./Pages/form/Formpage";
import BusinessForm from "./Components/BusinessForm/BusinessForm";
import PersonalForm from "./Components/PersonalForm/PersonalForm";
import Login from "./Pages/login/Login";
import DashboardPage from "./Pages/dashboard/DashboardPage";

import Overview from "./Pages/dashboard/pages/overview/Overview";
import ProtectedRoute from "./helper/requireAuth";
import PageNotFound from "./Pages/pagenotfound/PageNotFound";
/* import Order from "./Pages/dashboard/pages/order/Order"
 import Menu from "./Pages/dashboard/pages/menu/Menu";
 import Analytics from "./Pages/dashboard/pages/analytics/Analytics";
 import Message from "./Pages/dashboard/pages/message/Message";
 import Settings from "./Pages/dashboard/pages/settings/Settings";
 import Payout from "./Pages/dashboard/pages/payout/Payout";
 import AddMenu from "./Pages/dashboard/pages/menu/AddMenu";
 import HistoryOrder from "./Pages/dashboard/pages/order/HistoryOrder";
 import EditMenu from "./Pages/dashboard/pages/menu/EditMenu";
 import Profile from "./Pages/dashboard/pages/profile/Profile"; */

import AboutUs from "./Pages/misc/Links/AboutUs";
import PrivacyPolicy from "./Pages/misc/Links/PrivacyPolicy";
import Terms from "./Pages/misc/Links/Terms";
import Account from "./Pages/misc/Support/Account";
import Feedback from "./Pages/misc/Support/Feedback"
import Help from "./Pages/misc/Support/Help"
import Preloader from "./layouts/Preloader/Preloader";

// lazy-loading some of these components
const Order = lazy(() => import("./Pages/dashboard/pages/order/Order"));
const Menu = lazy(() => import("./Pages/dashboard/pages/menu/Menu"));
const Analytics = lazy(() =>
  import("./Pages/dashboard/pages/analytics/Analytics")
);
const Message = lazy(() => import("./Pages/dashboard/pages/message/Message"));
const Settings = lazy(() =>
  import("./Pages/dashboard/pages/settings/Settings")
);
const Payout = lazy(() => import("./Pages/dashboard/pages/payout/Payout"));
const AddMenu = lazy(() => import("./Pages/dashboard/pages/menu/AddMenu"));
const HistoryOrder = lazy(() =>
  import("./Pages/dashboard/pages/order/HistoryOrder")
);
const EditMenu = lazy(() => import("./Pages/dashboard/pages/menu/EditMenu"));
const Profile = lazy(() => import("./Pages/dashboard/pages/profile/Profile"));

// first layer of Routing is done here!
function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="signup" element={<Formpage />}>
            <Route index element={<PersonalForm />} />
            <Route path="business" element={<BusinessForm />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Overview />} />
            <Route path="orders" element={<Order />} />
            <Route path="orders/history" element={<HistoryOrder />} />
            <Route path="menu" element={<Menu />} />
            <Route path="menu/addMenu" element={<AddMenu />} />
            <Route path="menu/editMeal/:id" element={<EditMenu />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="message" element={<Message />} />
            <Route path="settings" element={<Settings />} />
            <Route path="payouts" element={<Payout />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="about-us" element={<AboutUs />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="account" element={<Account />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
