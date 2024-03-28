// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Allcoursedetails.css";
import Row from "react-bootstrap/Row";
// eslint-disable-next-line no-unused-vars
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
const Allcoursedetails = () => {
  const { categories } = useParams();
  console.log(categories);
  return (
    <>
      <section className="allcoursedetailspadding">
        <br />
        <div className="allcoursedetailsheading">{categories} Courses</div>
        <br />

        <div className="allcoursedetailsheading2">
          {" "}
          Courses to get you started{" "}
        </div>
        <hr className="allcoursedetailscustom-hr1 " />
        <br />

        <Row>
          <Col md={3} className="homepagefourthsectioncol2position">
            <div className="homepagefourthsectioncard2">
              <img
                src="/picture/5.png"
                alt=""
                className="specificcoursedetailsimg1"
              />
              <br />
              <div className="specificcoursedetailsdescription2">
                Web development
              </div>
              <hr className="homepagefourthsectioncustom-hr2" />

              <button className="specificcoursedetailsbutton1">
                <div className="specificcoursedetailsbuy">Details</div>
              </button>
            </div>
          </Col>
          <Col md={3} className="homepagefourthsectioncol2position">
            <div className="homepagefourthsectioncard2">
              <img
                src="/picture/5.png"
                alt=""
                className="specificcoursedetailsimg1"
              />
              <br />
              <div className="specificcoursedetailsdescription2">
                Web development
              </div>
              <hr className="homepagefourthsectioncustom-hr2" />

              <button className="specificcoursedetailsbutton1">
                <div className="specificcoursedetailsbuy">Details</div>
              </button>
            </div>
          </Col>
          <Col md={3} className="homepagefourthsectioncol2position">
            <div className="homepagefourthsectioncard2">
              <img
                src="/picture/5.png"
                alt=""
                className="specificcoursedetailsimg1"
              />
              <br />
              <div className="specificcoursedetailsdescription2">
                Web development
              </div>
              <hr className="homepagefourthsectioncustom-hr2" />

              <button className="specificcoursedetailsbutton1">
                <div className="specificcoursedetailsbuy">Details</div>
              </button>
            </div>
          </Col>
          <Col md={3} className="homepagefourthsectioncol2position">
            <div className="homepagefourthsectioncard2">
              <img
                src="/picture/5.png"
                alt=""
                className="specificcoursedetailsimg1"
              />
              <br />
              <div className="specificcoursedetailsdescription2">
                Web development
              </div>
              <hr className="homepagefourthsectioncustom-hr2" />

              <button className="specificcoursedetailsbutton1">
                <div className="specificcoursedetailsbuy">Details</div>
              </button>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <div className="allcoursedetailsheading2"> Featured Courses </div>
        <hr className="allcoursedetailscustom-hr1 " />
        <br />
        <div className="allcoursedetailsdiv2 slide-in">
          <div className="allcoursedetailsdiv2">
            <div className="allcoursedetailsdiv2border">
              <div className="allcoursedetailsdiv2details">
                <Row>
                  <Col md={4}>
                    <img
                      src="/picture/14.jpg"
                      alt=""
                      className="allcoursedetailsimg1"
                    />
                  </Col>
                  <Col md={8} className="allcoursedetailscol1">
                    <div></div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div>
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
        <br />
      </section>
    </>
  );
};

export default Allcoursedetails;
