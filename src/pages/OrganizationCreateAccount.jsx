import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/organizationCreateAccount/logo.svg";
import general from "../assets/organizationCreateAccount/girl.svg";
import Email from "../assets/organizationCreateAccount/email.png";
import Password from "../assets/organizationCreateAccount/lock.svg";
import phone from "../assets/organizationCreateAccount/phone.png";
import User from "../assets/organizationCreateAccount/user.png";
import organization from "../assets/organizationCreateAccount/organization.png";
import "../styles/Login.css";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  orgName: Yup.string().required("Organization name is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  agreed: Yup.boolean().oneOf([true], "You must agree to terms"),
});

function OrganizationCreateAccount() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      orgName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreed: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const orgs = JSON.parse(localStorage.getItem("organizations")) || [];

      const newOrg = { ...values, role: "organization" };
      orgs.push(newOrg);

      localStorage.setItem("organizations", JSON.stringify(orgs));

      localStorage.setItem("token", "org-token-123");
      localStorage.setItem("user", JSON.stringify(newOrg));

      toast.success("Organization account created successfully!");
      navigate("/organization-subscription");
    },
  });

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
            className="girl-img position-absolute bottom-0 "
          />
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center  position-relative p-0">
          <div className="w-100 right-section mt-5">
            <div className="position-absolute help">
              <a href="#">Need Help?</a>
            </div>

            <h3 className="fw-semibold">Create Your Account</h3>
            <p className="text-muted">
              Join our platform and take your skills to the next level.
            </p>
            <div className="line"></div>

            <form onSubmit={formik.handleSubmit}>
              <div className="field">
                <label>Organization Name</label>
                <div className="input-group custom-input-group">
                  <span className="custom-input-icon m-0">
                    <img src={organization} alt="org icon" />
                  </span>
                  <input
                    type="text"
                    name="orgName"
                    className="custom-input"
                    placeholder="Enter your organization name"
                    value={formik.values.orgName}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.orgName && formik.errors.orgName && (
                  <div className="text-danger errormessage">
                    {formik.errors.orgName}
                  </div>
                )}
              </div>

              <div className="d-flex gap-2 w-100 m-0">
                <div className="w-50 field p-0">
                  <label>First Name</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0">
                      <img src={User} alt="user icon" />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      className="custom-input"
                      placeholder="Enter your first name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-danger errormessage">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>

                <div className="w-50 field p-0">
                  <label>Last Name</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0">
                      <img src={User} alt="user icon" />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      className="custom-input"
                      placeholder="Enter your last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-danger errormessage">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex gap-2 w-100 m-0">
                <div className=" w-50 field p-0">
                  <label>Email Address</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0">
                      <img src={Email} alt="email icon" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="custom-input"
                      placeholder="Enter your email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-danger errormessage">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className=" w-50 field p-0">
                  <label>Phone Number</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0">
                      <img src={phone} alt="phone icon" />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className="custom-input"
                      placeholder="Enter your phone number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="text-danger errormessage">
                      {formik.errors.phone}
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex gap-2 w-100 m-0">
                <div className="w-50 field p-0">
                  <label>Password</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0">
                      <img src={Password} alt="password icon" />
                    </span>
                    <input
                      type="password"
                      name="password"
                      className="custom-input"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-danger errormessage">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <div className="w-50 field p-0">
                  <label>Confirm Password</label>
                  <div className="input-group custom-input-group">
                    <span className="custom-input-icon m-0">
                      <img src={Password} alt="password icon" />
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="custom-input"
                      placeholder="Confirm your password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="text-danger errormessage">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formik.values.agreed}
                  onChange={formik.handleChange}
                  className="form-check-input me-2"
                />
                <label className="form-check-label">
                  I agree to the Terms & Conditions and Privacy Policy
                </label>
                {formik.touched.agreed && formik.errors.agreed && (
                  <div className="text-danger errormessage">
                    {formik.errors.agreed}
                  </div>
                )}
              </div>

              <button className="btn btn-primary w-100 mb-3" type="submit">
                Create Account
              </button>

              <Link to="/student-register" className="d-block mb-2">
                Register as Student →
              </Link>

              <div className="text-center">
                <p className="text-muted">
                  Already have an account? <Link to="/">Log In</Link>
                </p>
              </div>
            </form>
          </div>

          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationCreateAccount;
