/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import "./Coursedetails.css";
const Coursedetails = () => {
  return (
    <>
      <section className="coursedetail">
        <br />
        <br />
        <div className="coursedetailheading1">Videodetails</div>
        <br />
        <div className="coursedetailsvideopart">
          <div className="coursedetailsvideopart1"></div>
        </div>
        <hr className="coursedetailcustom-hr" />
        <Container>
          <div className="coursedetailheading2">Overview</div>
          <div className="coursedetailoverview">
            Become a proficient web developer with our Web Development
            Essentials course. From foundational HTML and CSS to dynamic
            JavaScript and back-end programming, you'll learn the essential
            skills needed to create responsive and interactive websites. Join us
            to unlock your potential and start building your digital presence
            today!
          </div>
          <hr className="coursedetailcustom-hr1" />
          <div className="coursedetailheading2">Description</div>
          <div className="coursedetailoverview">
            Become a proficient web developer with our Web Development
            Essentials course. From foundational HTML and CSS to dynamic
            JavaScript and back-end programming, you'll learn the essential
            skills needed to create responsive and interactive websites. Join us
            to unlock your potential and start building your digital presence
            today!
          </div>
          <hr className="coursedetailcustom-hr1" />
          <div className="coursedetailheading2">Instructor</div>
          <div className="coursedetailoverview">
            Become a proficient web developer with our Web Development
            Essentials course. From foundational HTML and CSS to dynamic
            JavaScript and back-end programming, you'll learn the essential
            skills needed to create responsive and interactive websites. Join us
            to unlock your potential and start building your digital presence
            today!
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
