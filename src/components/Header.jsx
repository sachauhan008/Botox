import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import logo1 from "../assets/logo1.svg";
import edit from "../assets/edit.svg";
import history from "../assets/history.svg";
import settings from "../assets/settings.svg";
import logout from "../assets/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center first">
          <div
            onClick={() => navigate("/training-module")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo1} alt="logo" className="logo-img" />
          </div>

          <nav className="d-none d-md-flex gap-4">
            <NavLink
              to="/training-module"
              className={({ isActive }) =>
                isActive
                  ? "fw-semibold text-decoration-none nav-link-active"
                  : "fw-semibold text-decoration-none"
              }
            >
              Assessments
            </NavLink>

            <NavLink
              to="/my-subscription"
              className={({ isActive }) =>
                isActive
                  ? "fw-semibold text-decoration-none nav-link-active"
                  : "fw-semibold text-decoration-none"
              }
            >
              My Subscriptions
            </NavLink>
          </nav>

          <div className="position-relative" ref={dropdownRef}>
            <div
              className="d-flex align-items-center gap-2"
              onClick={handleToggle}
              style={{ cursor: "pointer" }}
            >
              <span className="fw-bold text-dark">
                {(() => {
                  const user = JSON.parse(localStorage.getItem("user"));
                  if (user && user.firstName && user.lastName) {
                    return `${user.firstName} ${user.lastName}`;
                  }
                  return "User";
                })()}
              </span>{" "}
              {(() => {
                const user = JSON.parse(localStorage.getItem("user"));
                const letter =
                  user && user.firstName
                    ? user.firstName.charAt(0).toUpperCase()
                    : "U";
                return (
                  <div className="profile-image">
                    {letter}
                  </div>
                );
              })()}
            </div>

            {showMenu && (
              <div className="dropdown-menu-custom position-absolute end-0 mt-2 p-1 shadow rounded">
                <div
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={() => {
                    navigate("/edit-profile");
                  }}
                >
                  <img src={edit} alt="logo" className="dropdown" />
                  Edit Profile
                </div>
                <div
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={() => {
                    navigate("/payment-history");
                  }}
                >
                  <img src={history} alt="logo" className="dropdown" />
                  View Payment History
                </div>
                <div className="dropdown-item d-flex align-items-center gap-3">
                  <img src={settings} alt="logo" className="dropdown" />
                  Edit Preferences
                </div>
                <div className="line"></div>
                <div
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={() => setShowLogoutModal(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={logout} alt="logo" className="dropdown" />
                  Sign Out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showLogoutModal && (
        <>
          <div className="custom-modal-overlay" />

          <div className="custom-modal-container">
            <div className="custom-modal shadow">
              <div className="modal-header border-0">
                <h5 className="modal-title">Confirm Signout</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogoutModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to sign out?</p>
              </div>
              <div className="modal-footer border-0 d-flex justify-content-end gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowLogoutModal(false)}
                  style={{ marginLeft: "5px" }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setShowLogoutModal(false);
                    handleLogout();
                  }}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
