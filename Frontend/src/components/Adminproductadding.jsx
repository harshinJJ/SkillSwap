// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Container from "react-bootstrap/Container";

const Adminproductadding = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handleSubmit = () => {
    // Here you can implement your logic to handle the image upload, for example, sending it to a server.
    if (image) {
      console.log("Selected image:", image);
      // Implement your upload logic here
    } else {
      console.log("No image selected.");
    }
  };

  return (
    <>
      <Container>
        <div className="signuppage">
          <span className="signupheading">Add Course Details</span>
          <div className="signupinputposition">
            <input
              type="text"
              name="title"
              //   style={{ borderColor: formerror.name ? "red" : "" }}
              className="signupinput"
              placeholder="Enter title"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, name: "" });
              //   }}
            />
            <input
              type="text"
              name="description"
              //   style={{ borderColor: formerror.email ? "red" : "" }}
              className="signupinput"
              placeholder="Enter description"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, email: "" });
              //   }}
            />
            <input
              type="text"
              name="instructor"
              //   style={{ borderColor: formerror.password ? "red" : "" }}
              className="signupinput"
              placeholder="Enter instructor Name"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, password: "" });
              //   }}
            />
            <input
              type="text"
              name="instructor_description"
              //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
              className="signupinput"
              placeholder="Enter Instructor Description"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, confirmpassword: "" });
              //   }}
            />
            <input
              type="number"
              name="duration"
              //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
              className="signupinput"
              placeholder="Enter Duration"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, confirmpassword: "" });
              //   }}
            />
            <input
              type="text"
              name="skill level"
              //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
              className="signupinput"
              placeholder="Enter skill level"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, confirmpassword: "" });
              //   }}
            />
            <input
              type="text"
              name="course_outcome"
              //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
              className="signupinput"
              placeholder="Enter Course Outcome"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, confirmpassword: "" });
              //   }}
            />
            <input
              type="text"
              name="category"
              //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
              className="signupinput"
              placeholder="Enter Category"
              //   onChange={handlechange}
              //   onClick={() => {
              //     setFormerror({ ...formerror, confirmpassword: "" });
              //   }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="upload-image"
            />
            <label htmlFor="upload-image" className="signupinput">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper"></div>
              </div>
              <span>Upload Image</span>
            </label>
            <button className="" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <button className="signupbutton">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <div className="addi">+</div>
              </div>
            </div>
            <span>Upload</span>
          </button>
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

export default Adminproductadding;
