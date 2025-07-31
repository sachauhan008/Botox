import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Payment_history.css";

function PaymentHistory() {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <div
          className="paymentHistory"
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <section className="  section-1 d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-item-center">
              <div className="text-center ">
                <div className="slogan-box  ">
                  <h2 className="fw-semibold text-white mb-4">
                    Payment History
                  </h2>
                  <p>
                    Join our platform and take your skills to the next level.
                  </p>
                </div>
              </div>
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </section>

          <section className="container section-2  py-5 ">
            <h4 className="fw-semibold  ">Events & Transactions</h4>
            <div className="line"></div>
            <div className=" table-responsive">
              <table className="table align-middle custom-table m-0 ">
                <thead>
                  <tr>
                    <th>Message</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Course</th>
                    <th>Receipt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Enrollment initiated</td>
                    <td>$999.00</td>
                    <td>29 Sep 2024, 02:15 PM</td>
                    <td>Facial Anatomy: Botox Fundamentals</td>
                    <td>
                      <button className="btn btn-1 btn-dark  ">[Download PDF]</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Enrollment completed</td>
                    <td>$999.00</td>
                    <td>22 Sep 2023, 02:15 PM</td>
                    <td>Botox Injection Technique Practice</td>
                    <td>
                      <button className="btn btn-1 btn-dark ">[Download PDF]</button>
                    </td> 
                  </tr>
                  <tr>
                    <td>Enrollment initiated</td>
                    <td>$999.00</td>
                    <td>25 Sep 2022, 02:15 PM</td>
                    <td>Botox Injection Technique Practice</td>
                    <td>
                      <button className="btn btn-1 btn-dark  ">[Download PDF]</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment refunded</td>
                    <td>$999.00</td>
                    <td>28 Sep 2021, 02:15 PM</td>
                    <td>Botox Injection Technique Practice</td>
                    <td>
                      <button className="btn btn-1 btn-dark ">[Download PDF]</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PaymentHistory;
