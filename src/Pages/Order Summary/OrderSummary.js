import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./ordersummary.css";
import "../../App.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaCheckCircle,
  FaExclamation,
} from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import logo from "./pmlogo.png";
import { useParams } from "react-router-dom";
function App() {
  const { courseId, userId } = useParams();
  const [payment, setPayment] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [signatureId, setSignatureId] = useState("");
  const [paymentErr, setPaymentErr] = useState("");

  const [showModal, setShowModal] = useState(false);

  const BuyNow = async () => {
    let postData = {
      courseId,
      userId,
    };
    const response = await axios.post(
      "https://lab.progressiveminds.in/razorPayment",
      postData
    );
    console.log(response);
    let { data } = response;
    console.log(data);
    if (response.status !== 200) {
      return alert("Error Occured Please Try Again Later");
    }

    var options = {
      key: "rzp_test_NLG3fS8btjnqyD", // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.currency,
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        setPaymentId(response.razorpay_payment_id);
        setOrderId(response.razorpay_order_id);
        setSignatureId(response.razorpay_signature);
        setPayment(true);
        // setShowSuccessModal(true);
        setShowModal(true);
        let postData = {
          paymentId,
          orderId,
          signatureId,
        };
        sendSuccess(postData);
      },
      prefill: {
        name: "Siddhanth Pathak",
        email: "sidpathak@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();

    rzp1.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      console.log("PAYMENT ERR:", response);
      setPayment(false);
      setPaymentErr(response);
      let postData = {
        data: response.error.description,
      };
      sendFailure(postData);
      // setShowFailureModal(true);
      setShowModal(true);
    });
    // document.getElementById("rzp-button1").onclick = function (e) {
    //   rzp1.open();
    //   e.preventDefault();
    // };
  };

  const sendSuccess = async (postData) => {
    await axios.post("url", postData);
  };
  const sendFailure = async (postData) => {
    await axios.post("url", postData);
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {payment ? "Payment Successfull" : "Payment Failed"}
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className=" text-center">
          {payment ? (
            <>
              <h2>
                <FaCheckCircle className="text-primary" />
              </h2>
              <h4>Congratulations!!!!!!</h4>
              <p>You can now start the course</p>
              <p>Order ID:{`${orderId}`}</p>
              <button className="btn btn-primary" onClick={props.onHide}>
                <a href="/" className="text-light nav-link">
                  Close
                </a>
              </button>
            </>
          ) : (
            <>
              <h2>
                <FaExclamation className="text-primary" />
              </h2>
              <h4>Payment Failed</h4>
              <p>Please Try Again</p>
              <button
                className="text-light btn btn-primary me-2"
                onClick={props.onHide}
              >
                Retry
              </button>
              <button className="btn btn-primary" onClick={props.onHide}>
                <a href="/" className="text-light text-decoration-none">
                  Close
                </a>
              </button>
            </>
          )}
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="row">
        <div className="col-md-8  h-100" style={{ backgroundColor: "#eeeeee" }}>
          <img src={logo} alt="" style={{ width: "15rem", height: "5rem" }} />
          <div
            className="mx-auto"
            style={{ width: "70%", marginTop: "2.5rem" }}
          >
            <h3 className=" mb-2">Maths</h3>
            <img
              src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=250"
              alt="Course pic"
              className="my-2"
              style={{ width: "50%", height: "15rem" }}
            />
            <div
              className=" w-75 my-2  hideDesc"
              style={{ height: "10.5rem", padding: "0" }}
            >
              Start with our maths course for your JEE Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Est nam rem laudantium, iusto
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              assumenda tempora aspernatur aperiam fuga, atque facere impedit
              veritatis distinctio omnis.
            </div>
            <blockquote>
              Share our course <FaWhatsapp /> <FaFacebook /> <FaInstagram />{" "}
            </blockquote>
            <div className="d-flex">
              <p>Contact Us</p>
              <div className="d-flex flex-column ms-3">
                <p>Email:- test@test.com</p>
                <p>Phone Number:- 9922331155</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container">
            <div style={{ marginTop: "6rem" }}>
              <h3>Order Details</h3>
              <div className="d-flex justify-content-between mb-4">
                <h5 className="text-muted">Price</h5>
                <p>49,000 Rs</p>
              </div>
              <div>
                <h5 className="d-inline-block mb-4">Promo Code</h5>
                <span className="mx-2 border px-2 border-dark">CODE40</span>
                <span className="mx-2">Apply</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h5>Discounted Price</h5>
                <span>4,000 Rs</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h5>GST 18% Applicabe</h5>
                <span>1,800 Rs</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <b>-----------------------------------</b>
                <b>-------------</b>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <h5>Net Payable Amount</h5>
                <span>46,800 Rs</span>
              </div>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={() => BuyNow(1)}
                >
                  Pay 46,800Rs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
}

export default App;
