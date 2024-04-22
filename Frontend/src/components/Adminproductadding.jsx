// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Adminproductadding.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../constants/constant";
const Adminproductadding = () => {
  const [input, setInput] = useState({
    title: "",
    instructor: "",
    description: "",
    instructordescription: "",
    duration: "",
    skilllevel: "",
    courseoutcome: "",
    category: "",
    photo: "",
  });
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleCourseOutcomeChange = (event) => {
    const value = event.target.value;
    const points = value.split("\n");
    setInput((prev) => ({
      ...prev,
      courseoutcome: points,
    }));
  };

  const imagehandler = (event) => {
    setInput({
      ...input,
      photo: event.target.files[0],
    });
  };

  // const videoHandler = (event) => {
  //   setInput({ ...input, video: event.target.files[0] });
  // };
  const handlesubmit = (event) => {
    // setFormerror(formvalidate(userinput));
    event.preventDefault();
    console.log(input);
    const formdata = new FormData();
    formdata.append("title", input.title);
    formdata.append("instructor", input.instructor);
    formdata.append("description", input.description);
    formdata.append("instructordescription", input.instructordescription);
    formdata.append("duration", input.duration);
    formdata.append("skilllevel", input.skilllevel);
    formdata.append("courseoutcome", input.courseoutcome);
    formdata.append("category", input.category);
    // formdata.append("video", input.video);
    formdata.append("photo", input.photo);
    axios
      .post(`${baseurl}/admin/corsedetailsuploading`, formdata)
      .then((data) => {
        console.log(data);
        setInput("");
        const courseid = data.data.productdetails._id;
        console.log(courseid);
        // toast.success("registration successful", {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
        window.location.href = `/adminvideoupload/${courseid}`;
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

  return (
    <>
      <Container>
        <div className="signuppage">
          <ToastContainer />
          <span className="signupheading">Add Course Details</span>
          <form onSubmit={handlesubmit} encType="multipart/form-data">
            <div className="adminproductaddinputposition">
              <div className="adminproductaddinputposition1">
                <input
                  type="text"
                  name="title"
                  //   style={{ borderColor: formerror.name ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Enter title"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, name: "" });
                  //   }}
                />
                <input
                  type="text"
                  name="instructor"
                  //   style={{ borderColor: formerror.password ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Enter instructor Name"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, password: "" });
                  //   }}
                />
              </div>

              <textarea
                name="description"
                // style={{ borderColor: formerror.email ? "red" : "" }}
                className="adminproductaddinput2"
                placeholder="Enter course description"
                onChange={handlechange}
                // onClick={() => {
                //   setFormerror({ ...formerror, email: "" });
                // }}
              ></textarea>
              <textarea
                name="instructordescription"
                // style={{ borderColor: formerror.email ? "red" : "" }}
                className="adminproductaddinput2"
                placeholder="Enter Instructor Description"
                onChange={handlechange}
                // onClick={() => {
                //   setFormerror({ ...formerror, email: "" });
                // }}
              ></textarea>

              <div className="adminproductaddinputposition1">
                <input
                  type="number"
                  name="duration"
                  //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                  className="adminproductaddinput1"
                  placeholder="Enter Duration"
                  onChange={handlechange}
                  //   onClick={() => {
                  //     setFormerror({ ...formerror, confirmpassword: "" });
                  //   }}
                />
                {/* <input
                type="text"
                name="skilllevel"
                //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                className="adminproductaddinput1"
                placeholder="Enter skill level"
                onChange={handlechange}
                //   onClick={() => {
                //     setFormerror({ ...formerror, confirmpassword: "" });
                //   }}
              /> */}
                <select
                  className="adminproductaddinput1"
                  name="skilllevel"
                  onChange={handlechange}
                >
                  <option value="None">Skill Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <textarea
                name="courseoutcome"
                className="adminproductaddinput2"
                placeholder="Enter Course Outcome (One point per line)"
                onChange={handleCourseOutcomeChange}
              ></textarea>

              <div>
                {/* <input
                type="text"
                name="category"
                //   style={{ borderColor: formerror.confirmpassword ? "red" : "" }}
                className="adminproductaddinput1"
                placeholder="Enter Category"
                onChange={handlechange}
                //   onClick={() => {
                //     setFormerror({ ...formerror, confirmpassword: "" });
                //   }}
              /> */}
                <select
                  className="adminproductaddinput1"
                  name="category"
                  onChange={handlechange}
                >
                  <option value="None">Category Of Course</option>
                  <option value="Music">Music</option>
                  <option value="Design">Design</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Development">Development</option>
                  <option value="It & Software">It & Software</option>
                  <option value="Health & Fitness">Health & Fitness</option>
                  <option value="Photography & Video">
                    Photography & Video
                  </option>
                  <option value="Finance & Accounting">
                    Finance & Accounting
                  </option>
                </select>
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
              {/* <input
                type="file"
                accept="video/*"
                name="video"
                onChange={videoHandler}
                style={{ display: "none" }}
                id="upload-video"
              />
              <label htmlFor="upload-video" className="adminproductaddinput1">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper"></div>
                </div>
                <span>Upload Video</span>
              </label> */}
            </div>
            <div className="buttonposition">
              <button type="submit" className="productaddbutton">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <div className="addi productaddbuttontext">+</div>
                  </div>
                </div>
                <span className="productaddbuttontext">Video Upload</span>
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

export default Adminproductadding;
