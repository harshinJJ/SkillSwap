// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Signuppage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../constants/constant";

const Signuppage = () => {
  const [userinput, setUserinput] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [formerror, setFormerror] = useState({});
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserinput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    setFormerror(formvalidate(userinput));
    console.log(userinput);
    axios
      .post(`${baseurl}/user/register`, userinput)
      .then((data) => {
        console.log(data);
        toast.success("registration successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  function formvalidate(values) {
    var error = {};

    if (values.name === "") {
      error.name = "enter the name";
    }
    if (values.email === "") {
      error.email = "enter email";
    }
    if (values.password === "") {
      error.password = "password required";
    }
    if (values.confirmpassword === "") {
      error.specialisation = "Re-confirmation required";
    }
    return error;
  }
  return (
    <>
      <Container>
        <div className="signuppage">
          <span className="signupheading">SignUp</span>
          <div className="signupinputposition">
            <ToastContainer />

            <input
              type="text"
              name="name"
              style={{ borderColor: formerror.name ? "red" : "" }}
              className="signupinput"
              placeholder="Enter your Full Name"
              onChange={handlechange}
              onClick={() => {
                setFormerror({ ...formerror, name: "" });
              }}
            />
            <input
              type="email"
              name="email"
              style={{ borderColor: formerror.email ? "red" : "" }}
              className="signupinput"
              placeholder="Enter your Email"
              onChange={handlechange}
              onClick={() => {
                setFormerror({ ...formerror, email: "" });
              }}
            />
            <input
              type="password"
              name="password"
              style={{ borderColor: formerror.password ? "red" : "" }}
              className="signupinput"
              placeholder="Enter your password!"
              onChange={handlechange}
              onClick={() => {
                setFormerror({ ...formerror, password: "" });
              }}
            />
            <input
              type="password"
              name="confirmpassword"
              style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
              className="signupinput"
              placeholder="Re-enter your password!"
              onChange={handlechange}
              onClick={() => {
                setFormerror({ ...formerror, confirmpassword: "" });
              }}
            />
          </div>
          <button className="signupbutton" onClick={handlesubmit}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <div className="addi">+</div>
              </div>
            </div>
            <span>SignUp</span>
          </button>
          <hr className="custom-hr" />
          <div className="signuploginheading">
            Already on SkillSwap, <a href="/Login">Login</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signuppage;
