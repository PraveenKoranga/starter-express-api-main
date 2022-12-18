import React from "react";
import { Carousel } from "react-bootstrap";

const Carousels = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="slider_image">
          <img
            className="d-block w-100"
            src="https://www.thebalancecareers.com/thmb/3TXSZvKKQXcWu3Zu3qU8ag158MU=/3864x2577/filters:fill(auto,1)/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p className="slider1_heading">EDUCATION</p>
            <p className="slider1_subheading">education for everyone</p>
            <p className="slider1_desc">
              We provides always our best services for our clients and always
              <br />
              try to achieve our client's trust and satisfaction.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider_image">
          <img
            className="d-block w-100"
            src="https://static-copyright-com-au.s3.amazonaws.com/uploads/2015/04/Education_StudyingBooks-@Stokkete-lowres.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <p className="slider2_heading">feed your knowladge</p>
            <p className="slider2_subheading">best code learning platform</p>
            <p className="slider2_desc">
              We provides always our best services for our clients and always
              <br />
              try to achieve our client's trust and satisfaction.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slider_image">
          <img
            className="d-block w-100"
            src="https://images.financialexpress.com/2020/10/education-1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <p className="slider3_heading">best education</p>
            <p className="slider3_subheading">for your better future</p>
            <p className="slider3_desc">
              We provides always our best services for our clients and always
              <br />
              try to achieve our client's trust and satisfaction.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels;
