/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Personalassistanceadding = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    purpose: "",
    language: "",
    industry: "",
    price: "",
    description: "",
    photo: "",
  });
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const imagehandler = (event) => {
    setInput({
      ...input,
      photo: event.target.files[0],
    });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(input);
    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("email", input.email);
    formdata.append("password", input.password);
    formdata.append("cpassword", input.cpassword);
    formdata.append("purpose", input.purpose);
    formdata.append("language", input.language);
    formdata.append("industry", input.industry);
    formdata.append("price", input.price);
    formdata.append("description", input.description);
    formdata.append("photo", input.photo);
    axios
      .post("http://localhost:8080/instructor/register", formdata)
      .then((data) => {
        console.log(data);
        toast.success("Registration successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/Login");
        }, 3500);
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
  return (
    <>
      <Container>
        <div className="signuppage">
          <ToastContainer />
          <span className="signupheading">Enter Your Details</span>
          <form onSubmit={handlesubmit} encType="multipart/form-data">
            <div className="adminproductaddinputposition">
              <div className="adminproductaddinputposition1">
                <input
                  type="text"
                  name="name"
                  //   style={{ borderColor: formerror.name ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Enter Your Name"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, name: "" });
                  //   }}
                />
                <input
                  type="email"
                  name="email"
                  //   style={{ borderColor: formerror.password ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Enter Your Email"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, password: "" });
                  //   }}
                />
              </div>
              <div className="adminproductaddinputposition1">
                <div className="adminproductaddinputposition1">
                  <input
                    type="password"
                    name="cpassword"
                    //   style={{ borderColor: formerror.password ? "red" : "" }}
                    className="adminproductaddinput1"
                    placeholder="Re-Enter Your Password"
                    onChange={handlechange}
                    //   onClick={() => {
                    //     setFormerror({ ...formerror, password: "" });
                    //   }}
                  />
                  <div className="adminproductaddinputposition1">
                    <input
                      type="password"
                      name="password"
                      //   style={{ borderColor: formerror.password ? "red" : "" }}
                      className="adminproductaddinput1"
                      placeholder="Enter Your Password"
                      onChange={handlechange}
                      //   onClick={() => {
                      //     setFormerror({ ...formerror, password: "" });
                      //   }}
                    />
                  </div>
                </div>
              </div>

              <textarea
                name="industry"
                // style={{ borderColor: formerror.email ? "red" : "" }}
                className="adminproductaddinput2"
                placeholder="Industry"
                onChange={handlechange}
                // onClick={() => {
                //   setFormerror({ ...formerror, email: "" });
                // }}
              ></textarea>
              <textarea
                name="description"
                className="adminproductaddinput2"
                placeholder="Enter Your Description"
                onChange={handlechange}
              ></textarea>
              <div className="adminproductaddinputposition1">
                <input
                  type="number"
                  name="price"
                  //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Price Per Hour In Rupees"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, confirmpassword: "" });
                  //   }}
                />
                <select
                  className="adminproductaddinput1"
                  name="language"
                  onChange={handlechange}
                >
                  <option value="None">Language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Malayalam">Malayalam</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="purpose"
                  //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Enter Your Purpose"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, confirmpassword: "" });
                  //   }}
                />
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={imagehandler}
                  style={{ display: "none" }}
                  id="upload-image"
                />
                <label htmlFor="upload-image" className="adminproductaddinput1">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper"></div>
                  </div>
                  <span>Upload Image</span>
                </label>
              </div>
            </div>
            <div className="buttonposition">
              <button type="submit" className="productaddbutton">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <div className="addi productaddbuttontext">+</div>
                  </div>
                </div>
                <span className="productaddbuttontext">Upload</span>
              </button>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
};

export default Personalassistanceadding;
