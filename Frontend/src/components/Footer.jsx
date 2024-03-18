// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
const Footer = () => {
  return (

    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h5 >About Us</h5>
            <p>Whether youre looking to enhance your skills in coding, cooking, photography, or any other area of interest, SkillSwap provides a platform where you can find experienced mentors and engaging courses tailored to your learning needs.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: skillswap@gmail.com</p>
            <p>Phone: +1234567890</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2024 SkillSwap. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
