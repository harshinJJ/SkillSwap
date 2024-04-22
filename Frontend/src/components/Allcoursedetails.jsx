// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Allcoursedetails.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../constants/constant";

const Allcoursedetails = () => {
  const { categories } = useParams();
  const [datas, setDatas] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }

  function previousSlide() {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  }

  useEffect(() => {
    axios
      .get(`${baseurl}http://localhost:8080/admin/coursedetails/${categories}`)
      .then((data) => {
        setDatas(data.data.specificcourse);
      });
  }, []);
  console.log(datas);

  const slides = datas.map((data, index) => (
    <div className="allcoursedetailsdiv2border" key={index}>
      <div className="allcoursedetailsdiv2details">
        <Row>
          <Col md={4}>
            <img src={data.photo} alt="" className="allcoursedetailsimg1" />
          </Col>
          <Col md={8} className="allcoursedetailscol1">
            <div className="allcoursedetailscol1div1">{data.title}</div>
            <br />
            <div className="allcoursedetailscol1div">
              {" "}
              {data.description.split(" ").slice(0, 90).join(" ")}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  ));

  return (
    <>
      <div className="allcoursedetailsheading">{categories} Courses</div>

      <section className="allcoursedetailspadding">
        <br />
        <br />

        <div className="allcoursedetailsheading2">
          {" "}
          Courses to get you started{" "}
        </div>
        <hr className="allcoursedetailscustom-hr1 " />
        <br />

        <Row className="homepagefourthsectioncol2position">
          {datas.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <Col md={3} className="homepagefourthsectioncol2position">
              <div className="allcoursedetailscard2">
                <img src={data.photo} alt="" className="allcoursedetailimg2" />
                <br />
                <br />
                <div className="specificcoursedetailsdescription2">
                  {data.title}
                </div>
                <hr className="homepagefourthsectioncustom-hr2" />
                <Link to={`/Specificcoursedetail/${data._id}`}>
                  <button className="specificcoursedetailsbutton1">
                    <div className="specificcoursedetailsbuy">Details</div>
                  </button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <br />
        <br />
        <br />
        <div className="allcoursedetailsheading2"> Featured Courses </div>
        <hr className="allcoursedetailscustom-hr1 " />
        <br />
        <div className="allcoursedetailsdiv2">{slides[currentSlide]}</div>

        <div onClick={previousSlide} className="forwardbutton">
          {">"}
        </div>
        <div onClick={nextSlide} className="backwordbutton">
          {"<"}
        </div>
        <div className="allcoursedetailsotherhead">
          <div className="allcoursedetailsheading2"> Popular instructors </div>
          <br />
          <hr className="allcoursedetailscustom-hr1 " />
          <br />
          <Row>
            <Col md={3} className="">
              <div className="Subscriptioncard2">
                <img
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  alt=""
                  className="Subscriptionimg2"
                />
                <br />
                Hi there, my name is Scott Duffy. And I love making complex
                technical topics easy to understand. This has been the basis of
                my entire career – as a developer, as a development manager, as
                a software architect – over the past 20 years.
                <br />
                <hr className="Subscriptioncustom-hr4" />
                <Row>
                  <Col md={3}>
                    <br />
                    <img
                      src="/picture/15.jpg"
                      alt=""
                      className="Subscriptionimg3"
                    />
                  </Col>
                  <Col md={9} className="Subscriptionimg3description">
                    <span className="Subscriptionimg3description">
                      Scott Duffy, Bestselling Azure & TOGAF® Trainer, Microsoft
                      Azure MVP
                    </span>
                    <br />
                    <span className="Subscriptionimg3description"></span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3} className="">
              <div className="Subscriptioncard2">
                <img
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  alt=""
                  className="Subscriptionimg2"
                />
                <br />
                Andrei is the instructor of some of the highest rated
                programming and technical courses online. He no longer teaches
                on Udemy. Instead, he is now the founder of ZTM Academy which is
                one of the fastest growing education platforms in the world
                <br />
                <hr className="Subscriptioncustom-hr4" />
                <Row>
                  <Col md={3}>
                    <br />
                    <img
                      src="/picture/16.jpg"
                      alt=""
                      className="Subscriptionimg3"
                    />
                  </Col>
                  <Col md={9} className="Subscriptionimg3description">
                    <span className="Subscriptionimg3description">
                      Andrei Neagoie, Founder of zerotomastery.io
                    </span>
                    <br />
                    <span className="Subscriptionimg3description"></span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3} className="">
              <div className="Subscriptioncard2">
                <img
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  alt=""
                  className="Subscriptionimg2"
                />
                <br />
                In the early 2000s, Melissa embarked on a journey of
                self-discovery which lead to a very rewarding and beautiful
                spiritual awakening. She has since mastered the healing arts of
                massage and Reiki;
                <br />
                <br />
                <hr className="Subscriptioncustom-hr4" />
                <Row>
                  <Col md={3}>
                    <br />
                    <img
                      src="/picture/17.jpg"
                      alt=""
                      className="Subscriptionimg3"
                    />
                  </Col>
                  <Col md={9} className="Subscriptionimg3description">
                    <span className="Subscriptionimg3description">
                      Melissa Crowhurst Reiki Master Teacher, Inspirational
                      Coach, Author, Speaker
                    </span>
                    <br />
                    <span className="Subscriptionimg3description"></span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3} className="">
              <div className="Subscriptioncard2">
                <img
                  src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                  alt=""
                  className="Subscriptionimg2"
                />
                <br />
                Hallo, I am Sandra, teacher of German as a foreign language,
                trying to make it not foreign anymore for a wide range of
                students. In the last eight years, I have taught elementary and
                high school students as well as adults.
                <br />
                <br />
                <hr className="Subscriptioncustom-hr4" />
                <Row>
                  <Col md={3}>
                    <br />
                    <img
                      src="/picture/18.jpg"
                      alt=""
                      className="Subscriptionimg3"
                    />
                  </Col>
                  <Col md={9} className="Subscriptionimg3description">
                    <span className="Subscriptionimg3description">
                      Sandra 11Percent, Making German fun since 2011
                    </span>
                    <br />
                    <span className="Subscriptionimg3description"></span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <br />
      </section>
    </>
  );
};

export default Allcoursedetails;
