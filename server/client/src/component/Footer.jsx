import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={3} className="footer_row">
            <p className="text-uppercase fw-bold mb-4 text-red">Contact</p>
            <p>
              <FaHome />
              &nbsp; New York, NY 10012, US
            </p>
            <p>
              <FaEnvelope />
              &nbsp;{" "}
              <a href="mailto:praveenkoranga098@gmail.com"> info@example.com</a>
            </p>
            <p>
              <FaPhone />
              &nbsp; <a href="tel:8755455139">+ 01 234 567 88</a>
            </p>
            <p>
              <FaFacebookMessenger /> &nbsp;
              <a href="tel:8755455139"> + 01 234 567 89</a>
            </p>
          </Col>
          <Col lg={3} md={3} sm={3} className="footer_row">
            <p className="text-uppercase fw-bold mb-4 text-red">Quick links</p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Blog</a>
            </p>
            <p>
              <a href="/">About</a>
            </p>
            <p>
              <a href="/">Contact</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              <a href="/">Terms and Condition</a>
            </p>
          </Col>
          <Col lg={3} md={3} sm={3} className="footer_row">
            <p className="text-uppercase fw-bold mb-4 text-red">
              populer courses
            </p>
            <p>
              <a href="/" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="/" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="/" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="/" className="text-reset">
                Laravel
              </a>
            </p>
          </Col>
          <Col lg={3} md={3} sm={3} className="footer_row">
            <p className="text-uppercase fw-bold mb-4 text-red">Message Us</p>
            <input
              type="email"
              placeholder="enter email"
              className="footer_email"
            />
            <br />
            <textarea
              name="textarea"
              className="footer_textarea"
              placeholder="enter your message"
              rows="3"
            />
            <br />
            <button>send message</button>
          </Col>
        </Row>
        <div className="footer_social">
          <a href="/" className="me-4 text-reset">
            <FaFacebook />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="/" className="me-4 text-reset">
            <FaGithub />
          </a>
        </div>
        <div className="text-center p-4 text-white">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/">
            EasyLearning.in
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
