// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Subscription.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Subscription = () => {
  const [subdata, setSubdata] = useState([]);
  const role = sessionStorage.getItem("role");
  const Subscription = sessionStorage.getItem("subscription");
  useEffect(() => {
    axios
      .get("http://localhost:8080/subscription/subscriptiondetails")
      .then((data) => {
        console.log(data);
        setSubdata(data.data.subdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(subdata);
  return (
    <>
      {role == 0 ? (
        <section className="Subscription">
          <div className="spacing"></div>

          <div className="Subscriptionheading1">Subscription details</div>

          <div>
            <div className="subscription-container">
              <Container>
                <Row>
                  {subdata.map((data) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col md={4} className="Subscriptioncol1 slide-in-left">
                      <div className="Subscriptione-card Subscriptionplaying">
                        <div className="Subscriptionimage"></div>
                        <div className="Subscriptionwave"></div>
                        <div className="Subscriptionwave"></div>
                        <div className="Subscriptionwave"></div>

                        <div className="Subscriptioninfotop">
                          {data.planname}
                          <div className="Subscriptionname">{data.name1}</div>
                          <div className="Subscriptionname">{data.name2}</div>
                          <hr className="specificcoursedetailscustom-hr1" />
                          <div className="Subscriptionname1">{data.price}</div>
                          <div className="descriptionspacing"></div>
                          <Link to={`/adminsubscriptionupdate/${data._id}`}>
                            <button className="specificcoursedetailsbutton1">
                              <div className="specificcoursedetailsbuy">
                                update
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>

          <br />
          <br />
        </section>
      ) : role == 2 ? (
        <section className="Subscription">
          <div className="spacing"></div>

          <div className="Subscriptionheading1">
            Choose a plan for your future
          </div>

          <div>
            <div className="subscription-container">
              <Container>
                <Row>
                  {subdata.map((data) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col md={4} className="Subscriptioncol1 slide-in-left">
                      <div className="Subscriptione-card Subscriptionplaying">
                        <div className="Subscriptionimage"></div>
                        <div className="Subscriptionwave"></div>
                        <div className="Subscriptionwave"></div>
                        <div className="Subscriptionwave"></div>

                        <div className="Subscriptioninfotop">
                          {data.planname}
                          <div className="Subscriptionname">{data.name1}</div>
                          <div className="Subscriptionname">{data.name2}</div>
                          <hr className="specificcoursedetailscustom-hr1" />
                          <div className="Subscriptionname1">{data.price}</div>
                          <div className="descriptionspacing"></div>
                          {Subscription == 1 ? (
                            <Link to={"/"}>
                              <button className="specificcoursedetailsbutton1">
                                <div className="specificcoursedetailsbuy">
                                  Subscribe Now
                                </div>
                              </button>
                            </Link>
                          ) : (
                            <Link to={`/PaymentForm/${data._id}`}>
                              <button className="specificcoursedetailsbutton1">
                                <div className="specificcoursedetailsbuy">
                                  Subscribe Now
                                </div>
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>

          <br />
          <br />
          <section className="Subscription2ndsection">
            <span className="Subscriptionheading2 text-center">
              We collaborate with 50+ leading universities and companies
            </span>
            <br />
            <span>
              <Row>
                <Col md={2} className="Subscriptioncol3">
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=2&h=32"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=2&h=55"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&h=27"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
              </Row>
            </span>
          </section>
          <br />
          <br />
          <br />
          <div className="spacing"></div>
          <div className="Subscriptionheading1">
            See what others are achieving through learning
            <br />
            <br />
          </div>
          <div>
            <Container>
              <Row>
                <Col md={3} className="">
                  <div className="Subscriptioncard2">
                    <img
                      src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                      alt=""
                      className="Subscriptionimg2"
                    />
                    <br />
                    SkillSwap was truly a game-changer and a great guide for me
                    as we brought Dimensional to life.
                    <br />
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/6.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          Alvin Lim ,Technical Co-Founder, CTO at Dimensional
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
                    SkillSwap gives you the ability to be persistent. I learned
                    exactly what I needed to know in the real world. It helped
                    me sell myself to get a new role.
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/7.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          William A. Wachlin Partner Account Manager at Amazon
                          Web Services
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
                    With SkillSwap Business employees were able to marry the two
                    together, technology and consultant soft skills... to help
                    drive their careers forward.
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/8.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          Ian Stevens Head of Capability Development, North
                          America at Publicis Sapient
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
                    SkillSwap was truly a game-changer and a great guide for me
                    as we brought Dimensional to life.
                    <br />
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/9.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          Alvin Lim ,Technical Co-Founder, CTO at Dimensional
                        </span>
                        <br />
                        <span className="Subscriptionimg3description"></span>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <br />
          <br />
        </section>
      ) : (
        <section className="Subscription">
          <div className="spacing"></div>

          <div className="Subscriptionheading1">
            Choose a plan for your future
          </div>

          <div>
            <div className="subscription-container">
              <Container>
                <Row>
                  {subdata.map((data) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col md={4} className="Subscriptioncol1 slide-in-left">
                      <div className="Subscriptione-card Subscriptionplaying">
                        <div className="Subscriptionimage"></div>
                        <div className="Subscriptionwave"></div>
                        <div className="Subscriptionwave"></div>
                        <div className="Subscriptionwave"></div>

                        <div className="Subscriptioninfotop">
                          {data.planname}
                          <div className="Subscriptionname">{data.name1}</div>
                          <div className="Subscriptionname">{data.name2}</div>
                          <hr className="specificcoursedetailscustom-hr1" />
                          <div className="Subscriptionname1">{data.price}</div>
                          <div className="descriptionspacing"></div>
                          <Link to={"/Login"}>
                            <button className="specificcoursedetailsbutton1">
                              <div className="specificcoursedetailsbuy">
                                Subscribe Now
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>

          <br />
          <br />
          <section className="Subscription2ndsection">
            <span className="Subscriptionheading2 text-center">
              We collaborate with 50+ leading universities and companies
            </span>
            <br />
            <span>
              <Row>
                <Col md={2} className="Subscriptioncol3">
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=2&h=32"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=2&h=55"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&h=27"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
                <Col md={2} className="Subscriptioncol3">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="Subscriptionsecondsectionimg"
                  />
                </Col>
              </Row>
            </span>
          </section>
          <br />
          <br />
          <br />
          <div className="spacing"></div>
          <div className="Subscriptionheading1">
            See what others are achieving through learning
            <br />
            <br />
          </div>
          <div>
            <Container>
              <Row>
                <Col md={3} className="">
                  <div className="Subscriptioncard2">
                    <img
                      src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                      alt=""
                      className="Subscriptionimg2"
                    />
                    <br />
                    SkillSwap was truly a game-changer and a great guide for me
                    as we brought Dimensional to life.
                    <br />
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/6.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          Alvin Lim ,Technical Co-Founder, CTO at Dimensional
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
                    SkillSwap gives you the ability to be persistent. I learned
                    exactly what I needed to know in the real world. It helped
                    me sell myself to get a new role.
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/7.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          William A. Wachlin Partner Account Manager at Amazon
                          Web Services
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
                    With SkillSwap Business employees were able to marry the two
                    together, technology and consultant soft skills... to help
                    drive their careers forward.
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/8.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          Ian Stevens Head of Capability Development, North
                          America at Publicis Sapient
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
                    SkillSwap was truly a game-changer and a great guide for me
                    as we brought Dimensional to life.
                    <br />
                    <br />
                    <br />
                    <hr className="Subscriptioncustom-hr4" />
                    <Row>
                      <Col md={3}>
                        <br />
                        <img
                          src="/picture/9.jpeg"
                          alt=""
                          className="Subscriptionimg3"
                        />
                      </Col>
                      <Col md={9} className="Subscriptionimg3description">
                        <span className="Subscriptionimg3description">
                          Alvin Lim ,Technical Co-Founder, CTO at Dimensional
                        </span>
                        <br />
                        <span className="Subscriptionimg3description"></span>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <br />
          <br />
        </section>
      )}
    </>
  );
};

export default Subscription;
