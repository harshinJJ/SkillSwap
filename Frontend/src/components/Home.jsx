// eslint-disable-next-line no-unused-vars
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="homepage">
        <section className="firstsectionofhomepage">
          <div className="firstsectionofhomepage1">
            <Row>
              <Col md={6}>
                <img src="/picture/1.png" alt="" className="img1" />
              </Col>
              <Col md={6} className="heading1position">
                <span>
                  <button className="head1button">
                    <span>Know More</span>
                  </button>
                  <span className="homepageheading1">Learn & Share:</span>
                  <br />
                  <span className="homepagesubheading1">
                    Connect, Collaborate, and Cultivate Skills
                  </span>
                </span>
              </Col>
            </Row>
          </div>
        </section>
        <br />
        <br />
        <section className="secondsectionofhomepage">
          <span className="homepageheading2 text-center">
            We collaborate with 50+ leading universities and companies
          </span>
          <br />
          <span>
            <Container>
              <Row>
                <Col md={2} className="secondsectioncol">
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=2&h=32"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="secondsectioncol">
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="secondsectioncol">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=2&h=55"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="secondsectioncol">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="secondsectioncol">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&h=27"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
                <Col md={2} className="secondsectioncol">
                  {" "}
                  <img
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&h=37"
                    alt=""
                    className="secondsectionimg"
                  />
                </Col>
              </Row>
            </Container>
          </span>
        </section>
        <br />
        <br />

        {/* <section className="thirdsectionofhomepage">
          <Row>
            <Col md={6} className="thirdsectioncol">
              <span className="thirdsectionheading1">
                Learning Process Chart
              </span>
              <br />
              <br />
              <div className="thirdsectionchartpart">
                <div className="card">
                  <div className="thirdsectionsubheadposition">
                    <div className="thirdsectionsubhead">Discover Skills</div>
                    <br />
                    <br />
                    <div className="thirdsectionsubhead">Choose Skill</div>
                    <br />
                    <br />
                    <div className="thirdsectionsubhead">
                      Connect with Experts
                    </div>
                    <br />
                    <br />
                    <div className="thirdsectionsubhead">
                      Engage in Learning
                    </div>
                    <br />
                    <br />
                    <div className="thirdsectionsubhead">
                      Practice & Feedback
                    </div>
                    <br />
                    <br />
                    <div className="thirdsectionsubhead">Track Progress</div>
                  </div>
                </div> */}
                {/* <div className="thirdsectionvl"></div>
                <div className="thirdsectionsubheadposition">
                  <div className="thirdsectionsubhead">Discover Skills</div>
                  <br />
                  <br />
                  <div className="thirdsectionsubhead">Choose Skill</div>
                  <br />
                  <br />
                  <div className="thirdsectionsubhead">
                    Connect with Experts
                  </div>
                  <br />
                  <br />
                  <div className="thirdsectionsubhead">Engage in Learning</div>
                  <br />
                  <br />
                  <div className="thirdsectionsubhead">
                    Practice & Feedback
                  </div>
                  <br />
                  <br />
                  <div className="thirdsectionsubhead">Track Progress</div>
                </div> */}
              {/* </div>
            </Col>
            <Col md={6} className="thirdsectioncol">
              <article className="thirdsectioncard">
                <div className="thirdsectioncard-img">
                  <div className="thirdsectioncard-imgs thirdsectionpv thirdsectiondelete"></div>
                </div>

                <div className="thirdsectionproject-info">
                  <div className="thirdsectionflex">
                    <div className="thirdsectionproject-title">Title card</div>
                    <span className="thirdsectiontag">type</span>
                  </div>
                  <span className="thirdsectionlighter">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repudiandae voluptas ullam aut incidunt minima.
                  </span>
                </div>
              </article>
            </Col>
          </Row>
          <br />
          <br />
        </section> */}
      </section>
    </>
  );
};

export default Home;
