import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Facial from "../assets/trainingModules/facial.webp";
import Play from "../assets/trainingModules/Play.svg";
import "../styles/Training_modules.css";
import { useNavigate } from "react-router-dom";

function TrainingModules() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div className="training" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <section className="  section-1 d-flex justify-content-center align-items-center">
          <div className="container d-flex justify-content-center align-item-center">
            <div className="text-center ">
              <div className="slogan-box mb-3 ">
                <h2 className="fw-semibold text-white mb-4">Assignment</h2>
                <p>Join our platform and take your skills to the next level.</p>
              </div>
              <button className="btn " onClick={() => navigate("/assignment")}>
                General Assessment
              </button>
            </div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </section>

        <section className=" container section-2 d-flex justify-content-center align-items-center py-5">
          <img src={Facial} alt="logo" className="facial" />

          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body d-flex flex-column justify-content-between p-3">
              <h5 className="card-title fw-semibold mb-3">
                Facial Anatomy For <br />
                Botox Application <br />
                Treatment
              </h5>
              <button
                className="btn w-100 overview"
                type="submit"
                onClick={() => navigate("/assignment")}
              >
                Overview <img src={Play} alt="logo" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default TrainingModules;
