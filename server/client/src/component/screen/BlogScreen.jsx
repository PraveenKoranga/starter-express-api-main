import React, { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllComments } from "../../action/commentAction";
import Footer from "../Footer";
import AllBlog from "./blogscreen/AllBlog";

const BlogScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);
  const BannerURL =
    "https://www.thebalancecareers.com/thmb/3TXSZvKKQXcWu3Zu3qU8ag158MU=/3864x2577/filters:fill(auto,1)/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg";
  return (
    <>
      <Image src={BannerURL} alt="BannerImage" width="100%" height="400px" />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <AllBlog />
          </Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default BlogScreen;
