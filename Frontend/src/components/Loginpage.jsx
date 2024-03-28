// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [userinput, setUserinput] = useState({
    email: "",
    password: "",
  });
  const [formerror, setFormerror] = useState({});
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserinput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();
    setFormerror(formvalidate(userinput));
    console.log(userinput);
    axios
      .post("http://localhost:8080/login/loginpart", userinput)
      .then((data) => {
        console.log(data);
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        sessionStorage.setItem("token", data.data.token);
        sessionStorage.setItem("userid", data.data.logindata._id);
        sessionStorage.setItem("role", data.data.logindata.role);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
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
    if (values.email === "") {
      error.email = "enter email";
    }
    if (values.password === "") {
      error.password = "password required";
    }
    return error;
  }
  return (
    <>
      <Container>
        <div className="loginpage">
          <ToastContainer />
          <span className="loginheading">Login</span>
          <div className="logininputposition">
            <input
              type="email"
              name="email"
              className="logininput"
              style={{ borderColor: formerror.name ? "red" : "" }}
              placeholder="Enter your Email"
              onChange={handlechange}
              onClick={() => {
                setFormerror({ ...formerror, email: "" });
              }}
            />
            <input
              type="password"
              name="password"
              style={{ borderColor: formerror.name ? "red" : "" }}
              className="logininput"
              placeholder="Enter your password!"
              onChange={handlechange}
              onClick={() => {
                setFormerror({ ...formerror, password: "" });
              }}
            />
          </div>
          <button className="loginbutton" onClick={handlesubmit}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <div className="addi">{"->"}</div>
              </div>
            </div>
            <span>Login</span>
          </button>
          <hr className="custom-hr" />
          <div className="loginsignupheading">
            New to SkillSwap, <a href="/Signup">SignUp</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Loginpage;
