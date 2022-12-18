import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import Footer from "../Footer";

// import emailjs from 'emailjs-com';

const ContactScreen = () => {
  // const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_ipg6kni', 'template_fohev0h', e.target, 'user_ZXbR7j0im8VHUXNUioVAK')
  //         .then((result) => {
  //             console.log(result.text);
  //         }, (error) => {
  //             console.log(error.text);
  //         });
  //     e.target.reset();

  // }

  const url =
    "https://tse4.mm.bing.net/th?id=OIP.WMiQAtdA4QRe08N40UmsdAHaCe&pid=Api&P=0&w=534&h=179";
  return (
    <>
      <br />
      <img src={url} alt="contactbannerImage" className="image" />

      <Container>
        <br />
        <Row>
          <Col lg={8} md={12} sm={12} xs={12}>
            <div
              boxShadow={3}
              style={{ marginLeft: 10, paddingTop: 30, paddingBottom: 70 }}
            >
              <p style={{ fontSize: "25px" }}>
                Interested in <span style={{ color: "red" }}>discussing?</span>
              </p>
              <p
                style={{
                  fontWeight: "400",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                optio in quia ipsum quae neque alias eligendi, nulla nisi.
                Veniam ut quis similique culpa natus dolor aliquam officiis
                ratione libero. Expedita asperiores aliquam provident amet
                dolores.
              </p>

              <form action="" className="form">
                <p className="field_name">
                  Full Name<span className="star">*</span>{" "}
                </p>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="enter your first name"
                  className="input_fname"
                />

                <input
                  type="text"
                  name="lastname"
                  placeholder="enter your last name"
                  className="input_lname"
                />
                <br />

                <p className="field_name">
                  Email<span className="star">*</span>
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="enter your mail id"
                  className="input_email"
                />
                <br />

                <p className="field_name">
                  Message<span className="star">*</span>
                </p>
                <textarea
                  name="message"
                  placeholder="enter your message"
                  className="input_message"
                />
                <br />

                <p className="field_name">Additional Details</p>
                <textarea
                  name="details"
                  placeholder="Additional details"
                  className="input_details"
                />
                <br />

                <input
                  type="submit"
                  name="submitData"
                  id="submitData"
                  value="send"
                />
              </form>
            </div>
          </Col>

          <Col lg={4} md={12} sm={12} xs={12} style={{ textAlign: "justify" }}>
            <p>
              <span className="contact_heading">CONTACT</span> US{" "}
            </p>
            <p>
              We are currently processing significantly higher order and enquiry
              volumes than usual. This means response times for enquiries may be
              delayed. We will reply to all enquiries, and we appreciate your
              patience.
            </p>
            <div className="contact_detail">
              <FaMap className="contact_icon" />
              <div>
                <p className="contact_type">
                  <strong>our office location</strong>
                </p>
                <p className="contact_item"> New York, NY 10012, US</p>
              </div>
            </div>
            <div className="contact_detail">
              <FaPhone className="contact_icon" />
              <div>
                <p className="contact_type">
                  <strong>our office location</strong>
                </p>
                <p className="contact_item"> +91 435 252 4652</p>
              </div>
            </div>
            <div className="contact_detail">
              <FaEnvelope className="contact_icon" />
              <div>
                <p className="contact_type">
                  <strong>our office location</strong>
                </p>
                <p className="contact_item"> support@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>

        <br />
        <Row>
          <iframe
            title="Easy Learning"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9646245834383!2d77.04583485047557!3d28.480611982391967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a5f2d2bf1f%3A0x330a402ce4306ed!2sOYO%2022756%20Diksha%20Hotel!5e0!3m2!1sen!2sin!4v1631294759537!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </Row>
        <br />
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default ContactScreen;
