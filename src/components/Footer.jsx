import React from "react";
import "../styles/Footer.css";
import logo1 from "../assets/logo1.svg";
import Email from "../assets/email1.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start footer ">
        
        <small>© 2025 Botox. All rights reserved.</small>

        <img src={logo1} alt="logo" className="logo-img" />

        <div className="text-center text-md-end">

          <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-2">
            <a href="mailto:support@botox.com">
              <img src={Email} alt="email icon" className="footer-icon" />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedin} alt="linkedin icon" className="footer-icon" />
            </a>
            <a href="https://x.com">
              <img src={twitter} alt="twitter icon" className="footer-icon" />
            </a>
            <a href="https://instagram.com">
              <img
                src={instagram}
                alt="instagram icon"
                className="footer-icon"
              />
            </a>
          </div>

          <div className="d-flex justify-content-center justify-content-md-end gap-3">
            <a
              href="#privacy"
              className="fw-semibold term text-decoration-none"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="fw-semibold term text-decoration-none">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
