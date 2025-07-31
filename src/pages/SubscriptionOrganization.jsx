import React from "react";
import logo1 from "../assets/subscriptionOrganization/logo1.svg";
import icon from "../assets/subscriptionOrganization/true.png";
import "../styles/Subscription_organization.css";
import { useNavigate } from "react-router-dom";

const plans = [
  { tier: "Tier 1", price: 999, users: "Up to 50 user account" },
  { tier: "Tier 2", price: 1999, users: "Up to 100 user account" },
  { tier: "Tier 3", price: 2999, users: "Up to 250 user account" },
  { tier: "Tier 4", price: 3999, users: "Up to 500 user account" },
  { tier: "Tier 5", price: 4999, users: "Up to 1000 user account" },
];

const SubscriptionOrganization = () => {
  const navigate = useNavigate();

  return (
    <div className="subscription-organization">
      <div className="logo-container p-4">
        <img src={logo1} alt="Logo" className="logo" />
      </div>

      <div className=" flex-fill  d-flex flex-column column-1">
        <div className="text-center mt-4 mb-3 first">
          <h1 className="fw-semibold">
            Welcome to <span>Botox</span> Choose a Plan
          </h1>
          <i className="description-1">
            Select a subscription to empower your team with advanced training
            tools.
          </i>
          <p className="description-2">
            Unlock team-wide access to expert-led modules, interactive 3D
            anatomy viewers, and practical assessments built to enhance clinical
            outcomes.
          </p>
        </div>

        <div className="column-2">
          {plans.map((plan, index) => (
            <div className="card shadow rounded-4" key={index}>
              <h5 className="fw-bold text-center">{plan.tier}</h5>
              <div className="line"></div>

              <h2 className="fw-semibold my-2 text-center">
                ${plan.price}
                <span className="text-dark fw-normal">/</span>
                <span className="text-dark fw-normal text">year</span>
              </h2>

              <ul className="list-unstyled mt-4">
                <li>
                  <img src={icon} alt="Logo" className="logo-1" /> {plan.users}
                </li>
                <li>
                  <img src={icon} alt="Logo" className="logo-1" /> Practice with
                  3D Anatomy
                </li>
                <li>
                  <img src={icon} alt="Logo" className="logo-1" /> Assessment
                  and exam tool
                </li>
                <li>
                  <img src={icon} alt="Logo" className="logo-1" /> Master Admin
                  Panel
                </li>
              </ul>

              <button
                className="btn w-100"
                onClick={() =>
                  navigate("/payment", {
                    state: {
                      tier: plan.tier,
                      price: plan.price,
                      duration: "12 months",
                      users: plan.users,
                    },
                  })
                }
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
    </div>
  );
};

export default SubscriptionOrganization;
