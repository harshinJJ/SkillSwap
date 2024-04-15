// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Coursevideoupload.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Coursevideoupload = () => {
  const [input, setInput] = useState({
    video: "",
  });
  const { id } = useParams();
  console.log(id);
  const videoHandler = (event) => {
    setInput({
      ...input,
      video: event.target.files[0],
    });
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(input);
    const formdata = new FormData();
    formdata.append("video", input.video);
    axios
      .post(`http://localhost:8080/admin/courseuploadingvideo/${id}`, formdata)
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
  return (
    <>
      <Container>
        <div className="videoupload">
          <ToastContainer />
          <br />
          <br />
          <span className="signupheading">Video Upload Part</span>
          <br />
          <br />
          <input
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
          </label>
          <div className="buttonposition">
            <button
              type="submit"
              className="productaddbutton"
              onClick={handlesubmit}
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <div className="addi productaddbuttontext">+</div>
                </div>
              </div>
              <span className="productaddbuttontext">Video Upload</span>
            </button>
          </div>
        </div>
        <div className="videouploadheight"></div>
      </Container>
    </>
  );
};

export default Coursevideoupload;
