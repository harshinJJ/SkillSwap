// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";

import "./Loginpage.css";
const Loginpage = () => {
  return (
    <>
      <Container>
        <div className="loginpage">
          <span className="loginheading">Login</span>
          <div className="logininputposition">
            <input
              type="email"
              name="text"
              className="logininput"
              placeholder="Enter your Email"
            />
            <input
              type="password"
              name="text"
              className="logininput"
              placeholder="Enter your password!"
            />
          </div>
          <button className="loginbutton">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <div className="addi">
                  {"->"}
                </div>
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
