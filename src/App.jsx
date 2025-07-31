import React from "react";
import MySubscription from "./pages/MySubscription";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./pages/Payment";
import SubscriptionOrganization from "./pages/SubscriptionOrganization";
import SubscriptionStudent from "./pages/SubscriptionStudent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import StudentCreateAccount from "./pages/StudentCreateAccount";
import OrganizationCreateAccount from "./pages/OrganizationCreateAccount";
import ScreenCheckWrapper from "./components/ScreenCheckWrapper";
import TrainingModules from "./pages/TrainingModules";
import Assignment from "./pages/Assignment";
import ScrollToTop from "./components/ScrollToTop";
import EditProfile from "./pages/EditProfile";
import PaymentHistory from "./pages/PaymentHistory";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScreenCheckWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/student-register" element={<StudentCreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/organization-register" element={<OrganizationCreateAccount />} />
            <Route path="/student-subscription" element={<SubscriptionStudent />} />
            <Route
              path="/organization-subscription"
              element={<SubscriptionOrganization />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/training-module" element={<TrainingModules />} />
            <Route path="/assignment" element={<Assignment />} />
            <Route path="/my-subscription" element={<MySubscription />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
          </Routes>
        </ScreenCheckWrapper>
      </Router>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
