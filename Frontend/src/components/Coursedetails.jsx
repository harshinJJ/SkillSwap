/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./Coursedetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Coursedetails = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/specificcoursedetails/${id}`)
      .then((data) => {
        console.log(data.data.specificcourse);
        setDatas(data.data.specificcourse);
      });
  }, []);

  return (
    <>
      <section className="coursedetail">
        <br />
        <br />
        <div className="coursedetailheading1">{datas.title}</div>
        <br />
        <div className="coursedetailsvideopart">
          <div className="coursedetailsvideopart1">
            {datas.video && (
              <video width="1300" height="550" controls>
                <source src={datas.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <hr className="coursedetailcustom-hr" />
        <Container>
          <div className="coursedetailheading2">Course Outcome</div>
          <div className="coursedetailoverview">
            {datas &&
              datas.courseoutcome &&
              datas.courseoutcome.map((data, index) => (
                <span key={index}>
                  {"=>"}
                  {data}
                  <br />
                  <br />
                </span>
              ))}
          </div>
          <hr className="coursedetailcustom-hr1" />
          <div className="coursedetailheading2">Description</div>
          <div className="coursedetailoverview">{datas.description}</div>
          <hr className="coursedetailcustom-hr1" />
          <div className="coursedetailheading2">
            Instructor : {datas.instructor}
          </div>
          <div className="coursedetailoverview">
            {datas.instructordescription}
          </div>
          <hr className="coursedetailcustom-hr1" />
          <div className="coursedetaillasthead">@SkillSwap</div>
          <br />
        </Container>
      </section>
    </>
  );
};
export default Coursedetails;
