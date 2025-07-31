import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Email from "../assets/editProfile/email.png";
import Password from "../assets/editProfile/lock.svg";
import phone from "../assets/editProfile/phone.png";
import User from "../assets/editProfile/user.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Edit_profile.css";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  currentPassword: Yup.string().when("newPassword", {
    is: (val) => !!val,
    then: (schema) => schema.required("Enter your current password"),
    otherwise: (schema) => schema,
  }),
  newPassword: Yup.string()
    .min(6, "Minimum 6 characters"),
  confirmPassword: Yup.string().when("newPassword", {
    is: (val) => !!val,
    then: (schema) =>
      schema
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm your password"),
    otherwise: (schema) => schema,
  }),
});

function EditProfile() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values, { setFieldValue }) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        toast.error("User not found.");
        return;
      }

      if (
        values.newPassword ||
        values.confirmPassword ||
        values.currentPassword
      ) {
        if (!values.currentPassword) {
          toast.error("Enter your current password.");
          return;
        }
        if (values.currentPassword !== user.password) {
          toast.error("Current password is incorrect.");
          return;
        }
        if (values.newPassword !== values.confirmPassword) {
          toast.error("New passwords do not match.");
          return;
        }
        if (!values.newPassword) {
          toast.error("Enter new password.");
          return;
        }
      } else {
        toast.info("No changes to update.");
        return;
      }

      const updatedUser = {
        ...user,
        password: values.newPassword ? values.newPassword : user.password,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      const key = user.role === "student" ? "students" : "organizations";
      const usersArr = JSON.parse(localStorage.getItem(key)) || [];
      const idx = usersArr.findIndex((u) => u.email === user.email);
      if (idx !== -1) {
        usersArr[idx] = updatedUser;
        localStorage.setItem(key, JSON.stringify(usersArr));
      }

      toast.success("Password updated successfully!");

      setFieldValue("currentPassword", "");
      setFieldValue("newPassword", "");
      setFieldValue("confirmPassword", "");
    },
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      formik.setValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <div className="editProfile" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <section className="section-1 d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-item-center">
              <div className="text-center ">
                <div className="slogan-box">
                  <h2 className="fw-semibold text-white mb-4">Edit Profile</h2>
                  <p>Join our platform and take your skills to the next level.</p>
                </div>
              </div>
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </section>

          <section className="container section-2 d-flex justify-content-center align-items-center py-5 ">
            <form className="profile-form" onSubmit={formik.handleSubmit}>
              <div className="d-flex gap-3">
                <div className="field flex-fill">
                  <label>First Name</label>
                  <div className="custom-input-group">
                    <span className="custom-input-icon">
                      <img src={User} alt="icon" />
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      className="custom-input"
                      placeholder="First Name"
                      value={formik.values.firstName}
                      readOnly
                    />
                  </div>
                </div>

                <div className="field flex-fill">
                  <label>Last Name</label>
                  <div className="custom-input-group">
                    <span className="custom-input-icon">
                      <img src={User} alt="user icon" />
                    </span>
                    <input
                      type="text"
                      name="lastName"
                      className="custom-input"
                      placeholder="Last Name"
                      value={formik.values.lastName}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label>Email Address</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon">
                    <img src={Email} alt="email icon" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="custom-input"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    readOnly
                  />
                </div>
              </div>

              <div className="field">
                <label>Phone Number</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon">
                    <img src={phone} alt="phone icon" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="custom-input"
                    placeholder="1234567890"
                    value={formik.values.phone}
                    readOnly
                  />
                </div>
              </div>

              <div className="field">
                <label>Current Password</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon">
                    <img src={Password} alt="lock icon" />
                  </span>
                  <input
                    type="password"
                    name="currentPassword"
                    className="custom-input"
                    placeholder="Enter current password"
                    value={formik.values.currentPassword}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.currentPassword && formik.errors.currentPassword && (
                  <div className="text-danger errormessage">{formik.errors.currentPassword}</div>
                )}
              </div>

              <div className="field">
                <label>New Password</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon">
                    <img src={Password} alt="lock icon" />
                  </span>
                  <input
                    type="password"
                    name="newPassword"
                    className="custom-input"
                    placeholder="Enter new password"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <div className="text-danger errormessage">{formik.errors.newPassword}</div>
                )}
              </div>

              <div className="field">
                <label>Confirm Password</label>
                <div className="custom-input-group">
                  <span className="custom-input-icon">
                    <img src={Password} alt="lock icon" />
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="custom-input"
                    placeholder="Enter your password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <div className="text-danger errormessage">{formik.errors.confirmPassword}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3">
                Update My Profile
              </button>
            </form>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default EditProfile;