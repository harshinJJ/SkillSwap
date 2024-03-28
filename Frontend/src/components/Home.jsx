// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "./Home.css";
const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <section className="homepage">
      <div className="allcoursedetailsdiv2 slide-in">

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
        </div>
        <br />
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
        <br />

        <section className="homepagefourthsection text-center">
          <br />
          <span className="homepageheading2 ">
            All the skills you need in one place
          </span>
          <br />
          <span className="homepagefourthsectiondescription">
            Our catalog offers a balanced approach to professional growth,
            covering both essential workplace skills and technical subjects.
          </span>
          <br />
          <br />
          <div className="homepagefourthsectionsearchbar">
            <div className="homepagefourthsectioncoolinput">
              <input
                type="text"
                placeholder="Search Here"
                name="input"
                className="homepagefourthsectioninput"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <div>
              <button className="homepagefourthsectionbutton3">Search</button>
            </div>
          </div>
          <div>
            <br />
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
          </div>
        </section>
        <br />
        <br />
        <br />

        <section className="text-center">
          <span className="homepageheading2 text-center">
            Invest in your career with SkillSwap
          </span>
          <br />
          <br />
          <div className="homepagethirdsectionposition">
            <Row>
              <Col md={4}>
                <div className="homepagecard1">
                  <img
                    src="/picture/12.png"
                    alt=""
                    className="thirdsectionimg"
                  />
                  <span>Learn Anything</span>
                  <br />
                  <span className="text-center">
                    Explore any interest or trending topic, take prerequisites,
                    and advance your skills
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="homepagecard1">
                  <img
                    src="/picture/10.png"
                    alt=""
                    className="thirdsectionimg"
                  />
                  <span>Save Money</span>
                  <br />
                  <span className="text-center">
                    Spend less money on your learning if you plan to take
                    multiple courses this year
                  </span>
                </div>
              </Col>
              <Col md={4}>
                <div className="homepagecard1">
                  <img
                    src="/picture/11.png"
                    alt=""
                    className="thirdsectionimg"
                  />
                  <span>Flexible Learning</span>
                  <br />
                  <span className="text-center">
                    Learn at your own pace, move between multiple courses, or
                    switch to a different course
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Home;

{
  /* <section className="thirdsectionofhomepage">
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
                </div> */
}
{
  /* <div className="thirdsectionvl"></div>
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
                </div> */
}
{
  /* </div>
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
        </section> */
}
