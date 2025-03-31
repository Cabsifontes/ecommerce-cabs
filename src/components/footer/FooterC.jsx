import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FooterC.css";

const FooterC = () => {
  return (
    <footer className="footer">
      <Container fluid className="p-0">
        <Row className="g-0 justify-content-center justify-content-md-between pie-pagina">
          <Col
            xs={12}
            md={4}
            lg={3}
            className="logo-footer text-center mb-3 mb-md-0 pt-3"
          >
            {/* <Link to="/">
              <img className="img-fluid logo" src="/img/logo.png" alt="logo" />
            </Link> */}
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center mb-4 mt-4 mb-md-0 pb-4"
          >
            <div className="footer-social text-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <i className="bi bi-facebook fs-3"></i>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <i className="bi bi-twitter fs-3"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="bi bi-instagram fs-3"></i>
              </a>
            </div>
          </Col>
          <Col xs={12} md={4} lg={3} className="text-center text-md-start">
            <Nav className="flex-column">
              {/* <Nav.Link as={Link} to="/legales">
                Legal & Cookies
              </Nav.Link>              
              <Nav.Link as={Link} to="/tyc">
                TyC
              </Nav.Link> */}
            </Nav>
          </Col>
        </Row>

        <Row className="base w-100 m-0">
          <Col xs={12} className="text-center p-0">
            <p>
              &copy; 2025 Todos los derechos reservados | <span>Cabs</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterC;
