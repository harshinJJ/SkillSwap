// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import "./Signuppage.css";
const Signuppage = () => {
  return (
    <>
      <Container>
        <div className="signuppage">
          <span className="signupheading">SignUp</span>
          <div className="signupinputposition">
            <input
              type="text"
              name="text"
              className="signupinput"
              placeholder="Enter your Full Name"
            />
            <input
              type="email"
              name="text"
              className="signupinput"
              placeholder="Enter your Email"
            />
            <input
              type="password"
              name="text"
              className="signupinput"
              placeholder="Enter your password!"
            />
          </div>
          <button className="signupbutton">
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
