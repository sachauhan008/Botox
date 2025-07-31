import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/login/logo.svg";
import general from "../assets/login/girl.svg";
import Email from "../assets/login/email.png";
import Password from "../assets/login/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const orgs = JSON.parse(localStorage.getItem("organizations")) || [];

  const allUsers = [...students, ...orgs];

  const matchedUser = allUsers.find(
    (u) =>
      u.email === formData.email && u.password === formData.password
  );

  if (!matchedUser) {
    toast.error("Invalid email or password");
    return;
  }

  localStorage.setItem("token", `${matchedUser.role}-token-123`);
  localStorage.setItem("user", JSON.stringify(matchedUser));

  toast.success("Login successful!");

    navigate("/training-module");
};




  return (
    <div className=" vw-100 vh-100 d-flex justify-content-center align-items-center p-0 m-0 overflow-hidden main-page">
      <div className="row w-100 h-100">
        <div className="col-md-6 left-section d-flex align-items-center justify-content-center text-white position-relative p-0">
          <div
            className="w-100 d-flex align-items-center justify-content-center"
            style={{ maxWidth: "640px" }}
          >
            <div className="position-absolute logo">
              <img src={logo} alt="logo" className="logo-img" />
            </div>

            <div className="slogan-box text-md-start text-center">
              <h2 className="slogan-box-text fw-semibold mb-0">Continue</h2>
              <h2 className="slogan-box-text fw-semibold mb-0">learning and</h2>
              <h2 className="slogan-box-text fw-semibold">exploring</h2>
              <h2 className="slogan-box-text fw-semibold">treatments.</h2>
            </div>
          </div>
          <img
            src={general}
            alt="girl"
            className="girl-img position-absolute bottom-0"
          />
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center position-relative p-0">
          <div className="w-100 right-section">
            <div className="position-absolute help">
              <a href="#">Need Help?</a>
            </div>

            <h3 className="fw-semibold">Welcome Back</h3>
            <p className="text-muted">
              Sign in to continue your training journey.
            </p>
            <div className="line"></div>

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Email Address</label>
                <div className="input-group custom-input-group">
                  <span className="custom-input-icon m-0">
                    <img src={Email} alt="email icon" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="custom-input"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="field">
                <label>Password</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon m-0">
                    <img src={Password} alt="password icon" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="custom-input"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="form-check-input me-2"
                  />
                  <label>Remember me</label>
                </div>
                <Link to="/">Forgot Password?</Link>
              </div>

              <button className="btn w-100 mb-1">Log In</button>

              <p className="text-center text-muted">
                <span>Don’t have an account? </span>
                <Link to="/student-register">Create Account</Link>
              </p>
            </form>
          </div>

          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
