import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Play from "../assets/Play.svg";
import assignmentlogo from "../assets/assignment/assignment-logo.svg";
import assignmentOverview from "../assets/assignment/assignment-overview.png";
import assignmentOverviewFrame from "../assets/assignment/assignment-overview-frame.png";
import timeLine from "../assets/assignment/time-line.svg";
import duration from "../assets/assignment/duration.svg";
import trueImg from "../assets/assignment/true-img.svg";
import circleLine from "../assets/assignment/checkbox-circle-line.svg";

import "../styles/Assignment.css";

function Assignment() {
  return (
    <>
      <Header />
      <div className="assignment">
        <div className="container  ">

          <div className=" section-1 text-white  rounded d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center">
              <img src={assignmentlogo} alt="Course Logo" className="me-5" />
              <div className="fw-semibold ">
                <div className="first">Facial Anatomy For</div>
                <div className="first">Botox Application Treatment</div>
              </div>
            </div>

            <div>
              <a href="#" className="text-white text-decoration-none second">
                ← Back
              </a>
            </div>
          </div>

          <div className="section-2 ">
            <h4 className="fw-semibold">Assignment Overview</h4>
            <div className="line"></div>
            <div className="row align-items-start g-5 ">
              <div className="col-md-6">
                <div className="position-relative">
                  <img
                    src={assignmentOverview}
                    alt="Course Logo"
                    className="main img-fluid "
                  />

                  <img
                    src={assignmentOverviewFrame}
                    alt="logo"
                    className="position-absolute top-0 start-0 logo-overlay"
                  />
                </div>
                <div className="mt-3 d-flex gap-3 justify-content-center">
                  <button className="btn btn-1" type="submit">
                    Continue Last Attempt
                    <img src={Play} alt="logo" className="play" />
                  </button>
                  <button className="btn btn-2">
                    Start New Attempt
                    <img src={Play} alt="logo" className="play" />
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <h6 className="fw-semibold">Assignment Description</h6>
                <p className="first">
                  Study the facial muscle and vascular anatomy necessary for
                  Botox administration. Learn to identify safe injection zones,
                  avoid high-risk areas, and understand muscle functionality for
                  aesthetic treatments.
                </p>

                <p className="second ">
                  <img src={timeLine} alt="logo" className="timeline" />{" "} 75–90
                  minutes
                </p>
                <p className="second m-0">
                  <img src={duration} alt="logo" className="timeline" />{" "}
                  <strong>Opens:</strong> August 1, 2024 at 12:00 AM
                </p>
                <p className="second second1 ">
                  <strong>Due:</strong>August 31, 2024 at 11:59 PM
                </p>

                <h6 className="fw-semibold mt-4">
                  What to Expect Upon Completion
                </h6>
                <ul className="list-unstyled">
                  <li>
                    <img src={trueImg} alt="logo" className="play" /> Instant
                    access to detailed performance results
                  </li>
                  <li>
                    <img src={trueImg} alt="logo" className="play" /> Ability to
                    review and retry before the due date
                  </li>
                  <li>
                    <img src={trueImg} alt="logo" className="play" />{" "}
                    Flexibility to choose your best attempt
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-3 ">
              <h4 className="fw-semibold  ">Assignment Attempts</h4>
              <div className="line"></div>
            <div className="table-responsive">
              <table className="table align-middle custom-table m-0 ">
                <thead>
                  <tr>
                    <th>Created</th>
                    <th>Last Updated</th>
                    <th>Result</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>29 Sep 2024, 12:15 PM</td>
                    <td>29 Sep 2024, 02:15 PM</td>
                    <td>100%</td>
                    <td>107 min</td>
                    <td>
                      <span className="status-badge bg-light-success">
                        Completed
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-1 btn-dark btn-sm ">
                        Turn In <img src={circleLine} alt="logo" className="circle" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>29 Sep 2024, 12:15 PM</td>
                    <td>29 Sep 2024, 02:15 PM</td>
                    <td>100%</td>
                    <td>–</td>
                    <td>
                      <span className="status-badge bg-light-warning">
                        In Progress
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-2 btn-sm ">
                        Resume <img src={Play} alt="logo" className="play-button" />
                      </button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-4 ">
            <h4 className="fw-semibold ">Activity Descriptions</h4>
            <div className="line"></div>
            <div className="p-4  box">
              <h6 className="fw-semibold m-0">Video Tutorial</h6>
              <p className=" ">
                Watch the required video to understand facial anatomy relevant to Botox treatments, including safe injection zones and critical muscle groups
              </p>
              <h6 className="fw-semibold m-0">Facial Anatomy Assessment</h6>
              <p className="m-0">
                Review detailed facial anatomy through interactive models and guided visuals. Learn to identify key muscles, vessels, and nerves involved in Botox procedures. This assignment is designed to be completed in 75–90 minutes on average.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Assignment;
