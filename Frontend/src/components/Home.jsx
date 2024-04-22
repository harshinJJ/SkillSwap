// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../constants/constant";

const Home = () => {
  console.log(baseurl);
  const role = sessionStorage.getItem("role");
  // eslint-disable-next-line no-unused-vars
  const [searchInput, setSearchInput] = useState("");
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios.get(`${baseurl}/admin/corsedetails`).then((data) => {
      console.log(data.data.coursedetail);
      setDatas(data.data.coursedetail);
    });
  }, []);
  useEffect(() => {
    // Filter data based on search input
    const filtered = datas.filter(
      (data) =>
        data.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(filtered);
  }, [datas, searchInput]);

  return (
    <>
      {role == 0 ? (
        <section className="homepage">
          <div className="homepageheight1"></div>
          <div className="allcoursedetailsdiv2 slide-in">
            <div className="Subscriptionheading1 text-center">
              Welcome to Admin Portal
            </div>
          </div>
          <div className="homepageheight1"></div>
        </section>
      ) : role == 2 ? (
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
            {" "}
            <br />
            <br />
            <span className="homepageheading2">
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
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <div>
                <button className="homepagefourthsectionbutton3">Search</button>
              </div>
            </div>
            <div
              className="homepagefourthsection-scroll"
              style={{ maxHeight: "450px", overflowY: "auto" }}
            >
              <div className="homepagefourthsection-content">
                <br />
                <br />
                <Row>
                  {filteredData.map((data) => (
                    <Col
                      md={3}
                      className="homepagefourthsectioncol2position"
                      key={data._id}
                    >
                      <div className="homepagefourthsectioncard2">
                        <img
                          src={data.photo}
                          alt=""
                          className="home4thsectionimg1"
                        />
                        <br />
                        <div className="specificcoursedetailsdescription2">
                          {data.title}
                        </div>
                        <hr className="homepagefourthsectioncustom-hr2" />
                        <Link
                          to={`/Specificcoursedetail/${data._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <button className="specificcoursedetailsbutton1">
                            <div className="specificcoursedetailsbuy">
                              Details
                            </div>
                          </button>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </section>

          <br />
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
                      Explore any interest or trending topic, take
                      prerequisites, and advance your skills
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
          <br />
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
          <section className="homepagefourthsection">
            <Row>
              <Col md={6}>
                <img src="/picture/21.png" alt="" className="img1" />
              </Col>
              <Col md={6} className="heading1position">
                <span>
                  <Link
                    to={"/Personalassistance"}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="head1button">
                      <span className="homeheads">Are U Ready</span>
                    </button>
                  </Link>
                  <span className="homepageheading1">
                    Become a Personal Assistant
                  </span>
                  <br />
                  <span className="homepagesubheading1">Help Our Students</span>
                  <br />
                </span>
              </Col>
            </Row>
          </section>
        </section>
      ) : (
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
            {" "}
            <br />
            <br />
            <span className="homepageheading2">
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
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <div>
                <button className="homepagefourthsectionbutton3">Search</button>
              </div>
            </div>
            <div
              className="homepagefourthsection-scroll"
              style={{ maxHeight: "450px", overflowY: "auto" }}
            >
              <div className="homepagefourthsection-content">
                <br />
                <br />
                <Row>
                  {filteredData.map((data) => (
                    <Col
                      md={3}
                      className="homepagefourthsectioncol2position"
                      key={data._id}
                    >
                      <div className="homepagefourthsectioncard2">
                        <img
                          src={data.photo}
                          alt=""
                          className="home4thsectionimg1"
                        />
                        <br />
                        <div className="specificcoursedetailsdescription2">
                          {data.title}
                        </div>
                        <hr className="homepagefourthsectioncustom-hr2" />
                        <Link
                          to={`/Specificcoursedetail/${data._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <button className="specificcoursedetailsbutton1">
                            <div className="specificcoursedetailsbuy">
                              Details
                            </div>
                          </button>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </section>

          <br />
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
                      Explore any interest or trending topic, take
                      prerequisites, and advance your skills
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
          <br />
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
          <section className="homepagefourthsection">
            <Row>
              <Col md={6}>
                <img src="/picture/21.png" alt="" className="img1" />
              </Col>
              <Col md={6} className="heading1position">
                <span>
                  <Link
                    to={"/Personalassistance"}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="head1button">
                      <span className="homeheads">Are U Ready</span>
                    </button>
                  </Link>
                  <span className="homepageheading1">
                    Become a Personal Assistant
                  </span>
                  <br />
                  <span className="homepagesubheading1">Help Our Students</span>
                  <br />
                </span>
              </Col>
            </Row>
          </section>
        </section>
      )}
    </>
  );
};

export default Home;
