// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const role = sessionStorage.getItem("role");
  const handleonclick = () => {
    sessionStorage.clear("userid");
    sessionStorage.clear("role");
    sessionStorage.clear("token");
  };
  return (
    <>
      {role == 0 ? (
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
                <Nav.Link href="/Adminproductadding" className="navtextstyle">
                  Add New Course
                </Nav.Link>
                <Nav.Link href="/adminupdatecourse" className="navtextstyle">
                  Update Course
                </Nav.Link>
                <Nav.Link href="/Subscription" className="navtextstyle">
                  Update Subscription
                </Nav.Link>
                <Nav.Link href="/mymessage" className="navtextstyle">
                  My Messages
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <Button
              href="/"
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
              onClick={handleonclick}
            >
              Logout
            </Button>
          </Container>
        </Navbar>
      ) : role == 2 ? (
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
                  <NavDropdown.Item href="/allcoursedetails/Music">
                    Music
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Design">
                    Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Lifestyle">
                    Lifestyle
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Development">
                    Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/It & Software">
                    It & Software
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Health & Fitness">
                    Health & Fitness
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Photography & Video">
                    Photography & Video
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Finance & Accounting">
                    Finance & Accounting
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* <Form className="d-flex search-spacing">
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
            </Form> */}

            <Button
              href="/"
              variant="outline-success"
              className="btn-spacing"
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
              onClick={handleonclick}
            >
              Log out
            </Button>
          </Container>
        </Navbar>
      ) : (
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
                  <NavDropdown.Item href="/allcoursedetails/Music">
                    Music
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Design">
                    Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Lifestyle">
                    Lifestyle
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Development">
                    Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/It & Software">
                    It & Software
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Health & Fitness">
                    Health & Fitness
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Photography & Video">
                    Photography & Video
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allcoursedetails/Finance & Accounting">
                    Finance & Accounting
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* <Form className="d-flex search-spacing">
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
            </Form> */}
            <Link to="/Login">
              <Button
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
      )}
    </>
  );
};

export default Header;
