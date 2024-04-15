/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Specificcoursedetail.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Specificcoursedetail = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState("");
  const [relatedcourse, setRelatedcourse] = useState([]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();

    axios
      .get(`http://localhost:8080/admin/specificcoursedetails/${id}`)
      .then((data) => {
        console.log(data.data.relatedcourse);
        setDatas(data.data.specificcourse);
        setRelatedcourse(data.data.relatedcourse);
      });
  }, []);
  const role = sessionStorage.getItem("role");
  const subscription = sessionStorage.getItem("subscription");

  return (
    <section>
      <div className="specificcoursedetails1stpart">
        <Container>
          <Row>
            <Col md={8}>
              <div className="specificcoursedetailsheading1">{datas.title}</div>
              <br />
              <div className="specificcoursedetailsdescription1"></div>
            </Col>
            <Col md={4} className="specificcoursedetailscol1position">
              <div className="specificcoursedetailscard1">
                <img
                  src={datas.photo}
                  alt=""
                  className="specificcoursedetailsimg1"
                />
                <br />
                <div className="specificcoursedetailsdescription2">
                  Subscripbe to SkillSwap and get life time access to unlimited
                  courses
                </div>
                <hr className="specificcoursedetailscustom-hr1" />
                {role == 2 && subscription == 1 ? (
                  <>
                    <Link
                      to={`/coursedetail/${id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button className="specificcoursedetailsbutton1">
                        <div className="specificcoursedetailsbuy">
                          More Details
                        </div>
                      </button>
                    </Link>
                  </>
                ) : role == 2 && subscription == 0 ? (
                  <>
                    <Link
                      to={"/Subscription"}
                      style={{ textDecoration: "none" }}
                    >
                      <button className="specificcoursedetailsbutton1">
                        <div className="specificcoursedetailsbuy">
                          Subscribe
                        </div>
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={"/Login"} style={{ textDecoration: "none" }}>
                      <button className="specificcoursedetailsbutton1">
                        <div className="specificcoursedetailsbuy">
                          More Details
                        </div>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <Container>
        <div className="specificcoursedetailsdescription3position">
          <div className="specificcoursedetailsheading2">
            What You'll Learn Here
          </div>
          {datas &&
            datas.courseoutcome &&
            datas.courseoutcome.map((data, index) => (
              <span key={index} className="specificcoursedetailsdescription3">
                {"=>"}
                {data}
              </span>
            ))}
        </div>
        <br />
        <br />
        <div className="specificcoursedetailsdescription4position">
          <span className="specificcoursedetailsheading2">Description</span>
          <br />
          <span className="specificcoursedetailsdescription4">
            {datas.description}
          </span>
        </div>
        <br />
        <br />
        <br />
        <div className="specificcoursedetailscollaboratesection">
          <section className="specificcoursedetailssection2">
            <span className="specificcoursedetailshead2 text-center">
              Top companies offer this course to their employees
            </span>
            <br />
            <span>
              <Container>
                <Row>
                  <Col md={2} className="specificcoursedetailscol3">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=2&h=32"
                      alt=""
                      className="specificcoursedetailsimg2"
                    />
                  </Col>
                  <Col md={2} className="specificcoursedetailscol3">
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&h=37"
                      alt=""
                      className="specificcoursedetailsimg2"
                    />
                  </Col>
                  <Col md={2} className="specificcoursedetailscol3">
                    {" "}
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=2&h=55"
                      alt=""
                      className="specificcoursedetailsimg2"
                    />
                  </Col>
                  <Col md={2} className="specificcoursedetailscol3">
                    {" "}
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=2&h=37"
                      alt=""
                      className="specificcoursedetailsimg2"
                    />
                  </Col>
                  <Col md={2} className="specificcoursedetailscol3">
                    {" "}
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&h=27"
                      alt=""
                      className="specificcoursedetailsimg2"
                    />
                  </Col>
                  <Col md={2} className="specificcoursedetailscol3">
                    {" "}
                    <img
                      src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&h=37"
                      alt=""
                      className="specificcoursedetailsimg2"
                    />
                  </Col>
                </Row>
              </Container>
            </span>
          </section>
        </div>
        <br />
        <br />
        <br />
        <div>
          <span className="specificcoursedetailsheading2">
            More Courses Related To{" "}
          </span>
          <br />
          <br />
          <br />
          <div className="specificcoursedetailsothercoursedetails">
            <div>
              <Row>
                {relatedcourse.slice(0, 3).map(
                  (
                    data // eslint-disable-next-line react/jsx-key
                  ) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col md={4} className="specificcoursedetailscol2position">
                      <div className="specificcoursedetailscard3">
                        <img
                          src={data.photo}
                          alt=""
                          className="specificcoursedetailsimg2"
                        />
                        <br />
                        <div className="specificcoursedetailsdescription2">
                          {data.title}
                        </div>
                        <hr className="specificcoursedetailscustom-hr2" />

                        <button
                          className="specificcoursedetailsbutton1"
                          onClick={() => {
                            window.location.reload();
                            window.location.href = `/Specificcoursedetail/${data._id}`;
                          }}
                        >
                          <div className="specificcoursedetailsbuy">
                            Details
                          </div>
                        </button>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Specificcoursedetail;
