/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Personalassistance.css";
import { Link } from "react-router-dom";

const Personalassistance = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, []);
  return (
    <>
      <section>
        <section className="firstsectionofhomepage slide-in">
          <div className="firstsectionofhomepage1">
            <Row>
              <Col md={6}>
                <img src="/picture/22.png" alt="" className="img1" />
              </Col>
              <Col md={6} className="heading1position">
                <span>
                  <div className="personalassistancefirstsection">
                    <span className="homepageheading1 personalassistancefirstsectionspan">
                      Become A
                    </span>
                    <br />
                    <span className="homepageheading1">Personal Assistant</span>
                    <Link
                      to={"/Personalassistanceadding"}
                      style={{ textDecoration: "none" }}
                    >
                      <button className="head1button">
                        <span>Get Started</span>
                      </button>
                    </Link>
                  </div>
                </span>
              </Col>
            </Row>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="personalassistance2ndsection">
          <div className="homepageheading2 text-center">
            Why Become a Personal Assistant?
          </div>
          <br />
          <br />
          <div className="homepagethirdsectionposition">
            <Row>
              <Col md={4}>
                <div className="homepagecard1">
                  <img
                    src="/picture/23.png"
                    alt=""
                    className="thirdsectionimg"
                  />
                  <br />
                  <span>Share Your Expertise</span>
                  <br />
                  <span className="text-center">
                    As a Personal Assistant, you willl have the opportunity to
                    share your knowledge and experience with learners who are
                    eager to expand their skillset.
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="homepagecard1">
                  <img
                    src="/picture/24.png"
                    alt=""
                    className="thirdsectionimg"
                  />
                  <br />
                  <span>Flexible Schedule</span>
                  <br />
                  <span className="text-center">
                    Work on your own terms and set your own schedule. Whether
                    you have a few hours to spare each week or prefer to work
                    full-time, there is flexibility to accommodate your
                    availability.
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="homepagecard1">
                  <img
                    src="/picture/25.png"
                    alt=""
                    className="thirdsectionimg"
                  />
                  <br />
                  <span>Make an Impact</span>
                  <br />
                  <span className="text-center">
                    By providing personalized assistance and guidance, you will
                    play a crucial role in helping learners overcome challenges,
                    achieve their goals, and unlock their full potential.
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="homepage4thsection">
          <div className="homepageheading2 text-center">
            What Does a Personal Assistant Do?
          </div>
          <br />
          <hr className="allcoursedetailscustom-hr1 " />
          <div className="personalassistancediv8">
            <div>Step 1 -- </div>
            <div>
              Provide Guidance: Assist learners with understanding course
              content, clarifying concepts, and answering questions related to
              their learning journey.
            </div>
          </div>
          <hr className="allcoursedetailscustom-hr1 " />
          <br />
          <hr className="allcoursedetailscustom-hr1 " />

          <div className="personalassistancediv8">
            <div>Step 2 -- </div>
            <div>
              Offer Support: Offer encouragement, motivation, and support to
              learners as they navigate their educational journey.
            </div>
          </div>
          <hr className="allcoursedetailscustom-hr1 " />
          <br />
          <hr className="allcoursedetailscustom-hr1 " />

          <div className="personalassistancediv8">
            <div>Step 3 -- </div>
            <div>
              Share Resources: Share relevant resources, study materials, and
              additional learning resources to enhance the learning experience.
            </div>
          </div>
          <hr className="allcoursedetailscustom-hr1 " />
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="homepageheading2 text-center">
            Join Our Team Today
          </div>
          <br />
          <Container>
            <div className="personalassistancediv6">
              <div className="personalassistanceheading2 text-center">
                Join our community of Personal Assistants and help learners
                around the world reach their full potential. Together, we can
                make a difference!
              </div>
              <br />
              <Link
                to={"/Personalassistanceadding"}
                style={{ textDecoration: "none" }}
              >
                <button className="head1button">
                  <span>Get Started</span>
                </button>
              </Link>
            </div>
            <br />
          </Container>
        </section>
        <br />
      </section>
    </>
  );
};

export default Personalassistance;
