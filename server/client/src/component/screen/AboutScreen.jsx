import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import {
  FaFacebook,
  FaGoogle,
  FaHandScissors,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Footer from "../Footer";

const AboutScreen = () => {
  const url1 =
    "https://accountingsoftware.co.in/wp-content/uploads/2017/01/About-Us-banner.png";
  const url2 = "https://images5.alphacoders.com/378/378173.jpg";
  return (
    <>
      <br />
      <img src={url1} alt="url1 error" className="image" />
      <br />
      <br />
      <br />

      <Container className="about_company">
        <div className="text_box">
          <p className="all_about">ALL &nbsp;ABOUT</p>
          <h2 className="aboutcompany_heading">
            THE WORLD’S BEST EDUCATION IN OUR <span>TUTORIAL</span>
          </h2>
          <p className="text_box_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error iste
            minima, eos fuga alias reiciendis aliquam officia incidunt corrupti
            nesciunt maxime porro inventore odit quae voluptate nam iusto
            aliquid eius qui tempore! Repellendus recusandae, quos consectetur
            illo possimus sint quo labore velit, porro laborum corrupti aut
            expedita veniam quaerat fugiat.
          </p>
        </div>
        <div className="image_box">
          <img src={url2} alt="url2 error" className="image2" />
        </div>
      </Container>
      <br />
      <br />

      <div className="about_us_features">
        <Container>
          <h2>
            OUR <span style={{ color: "red" }}>FEATURES</span>
          </h2>
          <br />
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="features_box">
                <div className="FaHandScissors_box">
                  <FaHandScissors color="white" fontSize="30px" />
                </div>
                <div className="features_details">
                  <p>
                    Less Css
                    <br />{" "}
                    <span className="features_desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, reprehenderit ipsam!
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="features_box">
                <div className="FaHandScissors_box">
                  <FaHandScissors color="white" fontSize="30px" />
                </div>
                <div className="features_details">
                  <p>
                    Easy Customiz
                    <br />
                    <span className="features_desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, reprehenderit ipsam!
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="features_box">
                <div className="FaHandScissors_box">
                  <FaHandScissors color="white" fontSize="30px" />
                </div>
                <div className="features_details">
                  <p>
                    Validation
                    <br />{" "}
                    <span className="features_desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, reprehenderit ipsam!
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="features_box">
                <div className="FaHandScissors_box">
                  <FaHandScissors color="white" fontSize="30px" />
                </div>
                <div className="features_details">
                  <p>
                    Less Css
                    <br />{" "}
                    <span className="features_desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, reprehenderit ipsam!
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div className="features_box">
                <div className="FaHandScissors_box">
                  <FaHandScissors color="white" fontSize="30px" />
                </div>
                <div className="features_details">
                  <p>
                    Easy Customiz
                    <br />
                    <span className="features_desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, reprehenderit ipsam!
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="features_box">
                <div className="FaHandScissors_box">
                  <FaHandScissors color="white" fontSize="30px" />
                </div>
                <div className="features_details">
                  <p>
                    Validation
                    <br />
                    <span className="features_desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod, reprehenderit ipsam!
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <Container>
        <h2>
          OUR <span style={{ color: "red" }}>TEACHERS</span>
        </h2>
        <br />
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Card className="teacher_card">
              <Card.Img
                className="teacher_image"
                variant="top"
                src="https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186"
              />
              <Card.Body>
                <Card.Title className="teacher_name">
                  Andre Smith - &nbsp;
                  <span style={{ color: "black", fontSize: "16px" }}>
                    Teacher
                  </span>
                </Card.Title>
                <Card.Text className="about_teacher">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam sequi
                </Card.Text>
                <Card.Text className="teacher_contact">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaGoogle />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="teacher_card">
              <Card.Img
                className="teacher_image"
                variant="top"
                src="https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186"
              />
              <Card.Body>
                <Card.Title className="teacher_name">
                  Andre Smith - &nbsp;
                  <span style={{ color: "black", fontSize: "16px" }}>
                    Teacher
                  </span>
                </Card.Title>
                <Card.Text className="about_teacher">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam sequi
                </Card.Text>
                <Card.Text className="teacher_contact">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaGoogle />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="teacher_card">
              <Card.Img
                className="teacher_image"
                variant="top"
                src="https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186"
              />
              <Card.Body>
                <Card.Title className="teacher_name">
                  Andre Smith - &nbsp;
                  <span style={{ color: "black", fontSize: "16px" }}>
                    Teacher
                  </span>
                </Card.Title>
                <Card.Text className="about_teacher">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam sequi
                </Card.Text>
                <Card.Text className="teacher_contact">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaGoogle />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="teacher_card">
              <Card.Img
                className="teacher_image"
                variant="top"
                src="https://tse2.mm.bing.net/th?id=OIP.rz_yiPxDQENe_QOrsJCp8QHaEK&pid=Api&P=0&w=328&h=186"
              />
              <Card.Body>
                <Card.Title className="teacher_name">
                  Andre Smith - &nbsp;
                  <span style={{ color: "black", fontSize: "16px" }}>
                    Teacher
                  </span>
                </Card.Title>
                <Card.Text className="about_teacher">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam sequi
                </Card.Text>
                <Card.Text className="teacher_contact">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                  <FaGoogle />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default AboutScreen;
