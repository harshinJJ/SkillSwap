/* eslint-disable no-unused-vars */
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Mymessages.css";

const Mymessages = () => {
  return (
    <>
      <div className="homepageheading2 text-center">My Messages</div>
      <br />
      <Container>
        <Row className="mymessages">
          <Col md={2} className="messagesection">
            <br />
            <div className="indivimessages">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              harshin
            </div>

            <div className="indivimessages">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              aswin
            </div>

            <div className="indivimessages">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              sangeeth
            </div>

            <div className="indivimessages">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              abu
            </div>

            <div className="indivimessages">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              nandhu
            </div>

            <div className="indivimessages">
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              hanan
            </div>

            {/* <div className="horizontal-line"></div> */}

            <div className="indivimessages">
              {" "}
              <img
                src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-1024.png"
                alt=""
                className="secondsectionimg1"
              />
              zoorya
            </div>
          </Col>
          <Col md={10} className="messagesection1">
            <div className="horizontal-line1">
              <div className="messageBox">
                <div className="fileUploadWrapper">
                  <label htmlFor="file">
                    <span className="tooltip">Add an image</span>
                  </label>
                  <input type="file" id="file" name="file" />
                </div>
                <input
                  required=""
                  placeholder="Message..."
                  type="text"
                  id="messageInput"
                />
                <button id="sendButton">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 664 663"
                  >
                    <path
                      fill="none"
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    ></path>
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="33.67"
                      stroke="#6c6c6c"
                      d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </Col>
        </Row>
        {/* <section className="mymessages">
          <div className="messagesection">
            <div>
              <div className="horizontal-line"></div>
            </div>
            <div className="vertical-line"></div>
          </div>
        </section> */}
      </Container>
      <br />
    </>
  );
};

export default Mymessages;
