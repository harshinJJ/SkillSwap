// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbgstyle">
      <Container fluid>
        <Navbar.Brand className="brandstyle" href="/">
          SkillSwap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="navtextstyle">
              Home
            </Nav.Link>
            <Nav.Link href="/Subscription" className="navtextstyle">
              Plans & Pricing
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="navbarScrollingDropdown"
              className="navtextstyle"
            >
              <NavDropdown.Item href="/Specificcoursedetail">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="/coursedetails">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex search-spacing">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 "
            style={{
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              borderColor: "black",
              borderRadius: "20px",
            }}
            aria-label="Search"
          />
        </Form>
        <Link to="/Login">
          <Button
            onClick={`/Login`}
            variant="outline-success"
            className="btn-spacing"
            style={{
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              color: "black",
              borderColor: "black",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "grey"; // Change hover color
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent"; // Reset to original color
            }}
          >
            Log in
          </Button>
        </Link>
        <Link to="/Signup">
          <Button
            variant="outline-success"
            style={{
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              color: "white",
              borderColor: "black",
              backgroundColor: "black",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "grey"; // Change hover color
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "black"; // Reset to original color
            }}
          >
            Sign up
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
