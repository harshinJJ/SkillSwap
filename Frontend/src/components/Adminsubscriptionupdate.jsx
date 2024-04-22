/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { baseurl } from "../constants/constant";

const Adminsubscriptionupdate = () => {
  const { subscriptionid } = useParams();
  const [sub, setSub] = useState("");
  const [input, setInput] = useState({
    planname: "",
    name1: "",
    name2: "",
    price: "",
  });
  useEffect(() => {
    axios
      .get(
        `${baseurl}/subscription/specificsubscriptiondetails/${subscriptionid}`
      )
      .then((data) => {
        setSub(data.data.specificsubdata);
        console.log(data.data.specificsubdata.name1);
      });
  }, []);
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${baseurl}http://localhost:8080/subscription/updatesubscription/${subscriptionid}`,
        input
      )
      .then((data) => {
        console.log(data);
      });
    console.log(input);
  };

  return (
    <>
      <Container>
        <div className="signuppage">
          <span className="signupheading">Update Subscription Details</span>
          <form onSubmit={handlesubmit} encType="multipart/form-data">
            <div className="adminproductaddinputposition">
              <div className="adminproductaddinputposition1">
                <input
                  type="text"
                  name="planname"
                  //   style={{ borderColor: formerror.name ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder={sub.planname}
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, name: "" });
                  //   }}
                />
                <input
                  type="text"
                  name="name1"
                  //   style={{ borderColor: formerror.password ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder={sub.name1}
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, password: "" });
                  //   }}
                />
              </div>
              <div className="adminproductaddinputposition1">
                <input
                  type="text"
                  name="name2"
                  //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder={sub.name2}
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, confirmpassword: "" });
                  //   }}
                />
                <input
                  type="text"
                  name="price"
                  //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder={sub.price}
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, confirmpassword: "" });
                  //   }}
                />
              </div>
            </div>
            <div className="buttonposition">
              <button type="submit" className="productaddbutton">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <div className="addi productaddbuttontext">+</div>
                  </div>
                </div>
                <span className="productaddbuttontext">Update</span>
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Adminsubscriptionupdate;
