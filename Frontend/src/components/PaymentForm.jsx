// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./PaymentForm.css"; // Import the CSS module
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../constants/constant";

function PaymentForm() {
  const { subscriptionid } = useParams();
  const [sub, setSub] = useState("");
  const myValue = sessionStorage.getItem("userid");
  useEffect(() => {
    axios
      .get(
        `${baseurl}/subscription/specificsubscriptiondetails/${subscriptionid}`
      )
      .then((data) => {
        setSub(data.data.specificsubdata);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.success("Payment successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    axios
      .post(
        `http://localhost:8080/subscription/subscriptionidentifier/${myValue}`
      )
      .then((data) => {
        console.log(data.data.updatedsubdata.subscription);

        sessionStorage.setItem("subscription", data.data.updatedsubdata.subscription);
      });
  };

  return (
    <>
      <Row>
        <ToastContainer />
        <Col md={8}>
          <form className="paymentForm">
            <br />
            <br />
            <label htmlFor="name" className="labelinpayment">
              Name on Card:
            </label>
            <input type="text" id="name" required className="paymentinput" />
            <label htmlFor="card-number" className="labelinpayment">
              Card Number:
            </label>
            <input
              type="text"
              id="card-number"
              inputMode="numeric"
              required
              className="paymentinput"
            />
            <label htmlFor="expiry" className="labelinpayment">
              Expiry Date:
            </label>
            <input type="month" id="expiry" required className="paymentinput" />
            <label htmlFor="cvv" className="labelinpayment">
              CVV:
            </label>
            <input
              type="password"
              id="cvv"
              inputMode="numeric"
              required
              className="paymentinput"
            />
          </form>
        </Col>

        <Col md={4}>
          <div className="paymentpartheight"></div>
          <div className="paymentcard">
            <div className="paymentheader">
              <span className="paymenttitle"></span>
              <span className="paymentprice">{sub.planname}</span>
            </div>
            <br />

            <ul className="paymentlists">
              <li className="paymentlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{sub.name1}</span>
              </li>
              <li className="paymentlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{sub.name2}</span>
              </li>
              <li className="paymentlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{sub.price}</span>
              </li>
            </ul>
            <button
              type="button"
              className="paymentaction"
              onClick={handleSubmit}
            >
              Pay Now
            </button>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </>
  );
}

export default PaymentForm;
