import React from "react";
import "../styles/Subscription.css";
import logo1 from "../assets/logo1.svg";
import icon from "../assets/true.png";
import { useNavigate } from "react-router-dom";

const SubscriptionStudent = () => {
  const navigate = useNavigate();

  return (
    <div className="subscription-student vh-100 vw-100 d-flex">
      <div className="logo-container p-4">
        <img src={logo1} alt="Logo" className="logo" />
      </div>

      <div className="flex-fill d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6  text-center text-md-start column-1">
              <h1 className="fw-semibold mb-2">
                Welcome to <span>Botox</span>
              </h1>
              <h1 className="fw-semibold mb-4">Choose a Plan</h1>
              <i className="first mb-3">
                Select a subscription to access the training platform.
              </i>
              <p className="second">
                Unlock expert-led modules, interactive 3D anatomy tools, and
                hands-on assessments designed to elevate your skills. Whether
                you're just starting or looking to deepen your expertise, our
                training platform supports your journey every step of the way.
              </p>
            </div>

            <div className="col-md-4 d-flex justify-content-center column-2">
              <div className="card shadow  rounded-4 w-100">
                <h5 className="fw-bold text-center">Student Plan</h5>
                <div class="line"></div>

                <h2 className=" fw-semibold my-2 text-center">
                  $199<span className=" text-dark fw-normal">/</span>
                  <span className=" text-dark fw-normal text">year</span>
                </h2>

                <ul className="list-unstyled mt-4">
                  <li>
                    <img src={icon} alt="Logo" className="logo-1" /> 1 user
                    account
                  </li>
                  <li>
                    <img src={icon} alt="Logo" className="logo-1" /> Practice
                    with 3D Anatomy
                  </li>
                  <li>
                    <img src={icon} alt="Logo" className="logo-1" /> Assessment
                    and exam tool
                  </li>
                  <li>
                    <img src={icon} alt="Logo" className="logo-1" /> Master
                    Admin Panel
                  </li>
                </ul>

                <button
                  className="btn  w-100  "
                  onClick={() =>
                    navigate("/payment", {
                      state: {
                        tier: "Student Plan",
                        price: 199,
                        duration: "12 months",
                        users: "1 user account",
                      },
                    })
                  }
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
    </div>
  );
};

export default SubscriptionStudent;
