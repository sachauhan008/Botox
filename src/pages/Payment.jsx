import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo1 from "../assets/payment/logo1.svg";
import icon from "../assets/payment/true.png";
import visa from "../assets/payment/VISA.svg";
import mastercard from "../assets/payment/Mastercard.svg";
import amex from "../assets/payment/AMEX.svg";
import discover from "../assets/payment/Discover.svg";

import "../styles/Payment.css";

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Card number must be 16 digits")
    .required("Card number is required"),
  expiry: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be in MM/YY format")
    .required("Expiry date is required"),
  cvv: Yup.string()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
  nameOnCard: Yup.string().required("Name on card is required"),
  zipcode: Yup.string().required("Zipcode is required"),
  saveCard: Yup.boolean(),
});

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state || {};

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      expiry: "",
      cvv: "",
      nameOnCard: "",
      zipcode: "",
      saveCard: false,
    },
    validationSchema,
    onSubmit: (values) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        const now = new Date();
        const nextPaymentDate = new Date(
          now.setFullYear(now.getFullYear() + 1)
        );
        const nextPayment = nextPaymentDate.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        });

        const planWithDate = { ...selectedPlan, nextPayment };

        user.plan = planWithDate;
        localStorage.setItem("user", JSON.stringify(user));

        const key = user.role === "organization" ? "organizations" : "students";
        const users = JSON.parse(localStorage.getItem(key)) || [];
        const idx = users.findIndex((u) => u.email === user.email);
        if (idx !== -1) {
          users[idx].plan = planWithDate;
          localStorage.setItem(key, JSON.stringify(users));
        }
      }

      navigate("/login");
      toast.success(`Payment of $${selectedPlan.price} completed!`);
      console.log("Payment Submitted:", values);
    },
  });

  return (
    <div className="payment">
      <div className="logo-container p-4">
        <img src={logo1} alt="Logo" className="logo" />
      </div>

      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
        <div className="payment-box d-flex">
          <div className="column-1">
            <div className="p-4">
              <h5 className="fw-semibold">Your Selected Plan</h5>
              <p className="first">
                Unlock full access to expert-led training and tools.
              </p>
              <div className="line"></div>
              <p className="second d-flex justify-content-between">
                <span>Plan:</span> {selectedPlan.tier}
              </p>
              <p className="second d-flex justify-content-between">
                <span>Price:</span>{" "}
                <span className="fw-bold">${selectedPlan.price}/year</span>
              </p>
              <p className="second d-flex justify-content-between mb-3">
                <span>Duration:</span> {selectedPlan.duration}
              </p>
              <ul className="list-unstyled mt-4">
                <li>
                  <img src={icon} alt="tick" className="logo-1" />{" "}
                  {selectedPlan.users}
                </li>
                <li>
                  <img src={icon} alt="tick" className="logo-1" /> Practice with
                  3D Anatomy
                </li>
                <li>
                  <img src={icon} alt="tick" className="logo-1" /> Assessment
                  and exam tool
                </li>
                <li>
                  <img src={icon} alt="tick" className="logo-1" /> Master Admin
                  Panel
                </li>
              </ul>
            </div>
          </div>

          <div className="column-2">
            <div className="p-3">
              <h5 className="fw-semibold">Payment Information</h5>
              <p className="first">
                Enter your details to complete the purchase securely.
              </p>
              <div className="line"></div>

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                  <label>Card Number</label>
                  <div className="input-group custom-input-group card-input-group">
                    <input
                      type="text"
                      name="cardNumber"
                      className="custom-input card-number-input"
                      placeholder="1234 5678 9101 1121"
                      value={formik.values.cardNumber}
                      onChange={formik.handleChange}
                    />
                    <div className="card-icons">
                      <img src={visa} alt="Visa" />
                      <img src={mastercard} alt="MasterCard" />
                      <img src={amex} alt="Amex" />
                      <img src={discover} alt="Discover" />
                    </div>
                  </div>
                  {formik.touched.cardNumber && formik.errors.cardNumber && (
                    <div className="text-danger errormessage">
                      {formik.errors.cardNumber}
                    </div>
                  )}
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <label>Expiration Date</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="expiry"
                        className="custom-input"
                        placeholder="MM/YY"
                        value={formik.values.expiry}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.expiry && formik.errors.expiry && (
                      <div className="text-danger errormessage">
                        {formik.errors.expiry}
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <label>CVV</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="cvv"
                        className="custom-input"
                        placeholder="123"
                        value={formik.values.cvv}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.cvv && formik.errors.cvv && (
                      <div className="text-danger errormessage">
                        {formik.errors.cvv}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <label>Name On Card</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="nameOnCard"
                        className="custom-input"
                        placeholder="John Doe"
                        value={formik.values.nameOnCard}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.nameOnCard && formik.errors.nameOnCard && (
                      <div className="text-danger errormessage">
                        {formik.errors.nameOnCard}
                      </div>
                    )}
                  </div>
                  <div className="col">
                    <label>Zipcode</label>
                    <div className="input-group custom-input-group">
                      <input
                        type="text"
                        name="zipcode"
                        className="custom-input"
                        placeholder="10001"
                        value={formik.values.zipcode}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.zipcode && formik.errors.zipcode && (
                      <div className="text-danger errormessage">
                        {formik.errors.zipcode}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    name="saveCard"
                    checked={formik.values.saveCard}
                    onChange={formik.handleChange}
                    className="form-check-input"
                    id="saveCard"
                  />
                  <label htmlFor="saveCard">Save card details</label>
                </div>

                <button className="btn w-100 mb-1" type="submit">
                  Pay ${selectedPlan.price}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
