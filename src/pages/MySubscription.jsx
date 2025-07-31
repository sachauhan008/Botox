import React from "react";
import icon from "../assets/mySubscription/true.png";
import file from "../assets/mySubscription/file-text.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/My_subscription.css";

function MySubscription() {
  const user = JSON.parse(localStorage.getItem("user"));
  const plan = user?.plan || {
    tier: "Student Plan",
    price: 199,
    duration: "12 months",
    users: "1 user account",
  };
  
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div className="subscription" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <section className="  section-1 d-flex justify-content-center align-items-center">
          <div className="container d-flex justify-content-center align-item-center">
            <div className="text-center ">
              <div className="slogan-box  ">
                <h2 className="fw-semibold text-white mb-4">
                  My Subscriptions
                </h2>
                <p>Join our platform and take your skills to the next level.</p>
              </div>
            </div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </section>

        <section className="container section-2 d-flex justify-content-center align-items-center py-5 ">
          <div
            className="card  shadow rounded-4 border-0 current-plan-card w-100">
            <h5 className="fw-semibold">Current Plan</h5>
            <p className=" first m-0">Manage your Botox Training Plan</p>
            <div className="line"></div>

            <div className="row">
              <div className="col-md-6">
                <p>
                  <span>Plan:</span>{" "}
                  <span className="float-end">{plan.tier || "Student Plan"}</span>
                </p>
                <p>
                  <span>Price:</span>{" "}
                  <span className="fw-bold float-end">
                    ${plan.price} <span className="fw-bold">/ year</span>
                  </span>
                </p>
                <p>
                  <span>Duration:</span>{" "}
                  <span className="float-end">{plan.duration}</span>
                </p>
                <p className="m-0">
                  <span>Next Payment:</span>{" "}
                  <span className="float-end">{plan.nextPayment}</span>
                </p>
              </div>

              <div className="col-md-6">
                <ul className="list-unstyled ms-md-3">
                  <li className="li"><img src={icon} alt="Logo" className="logo-1" />{plan.users}</li>
                  <li className="li"><img src={icon} alt="Logo" className="logo-1" />Practice with 3D Anatomy</li>
                  <li className="li"><img src={icon} alt="Logo" className="logo-1" />Assessment and exam tool</li>
                  <li className="last"><img src={icon} alt="Logo" className="logo-1" />Master Admin Panel</li>
                </ul>
              </div>
            </div>
            <div className="line"></div>

            <div className="d-flex justify-content-between  flex-wrap gap-2">
              <button className="btn     cancel">
                Cancel Subscription
              </button>
              <div className="d-flex gap-2 ms-auto">
                <button className="btn btn-link text-decoration-none invoice btn-sm">
                  Download Invoice <img src={file} alt="Logo" className="invoice-logo" />
                </button>
                <button className="btn upgrade btn-sm">Upgrade Plan</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default MySubscription;
