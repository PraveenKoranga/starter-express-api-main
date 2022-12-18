import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  AiOutlineBook,
  AiOutlineContacts,
  AiOutlineVideoCamera,
  AiOutlineSmile,
} from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { courseList } from "../../action/courseAction";
import { getReview } from "../../action/reviewAction";
import Footer from "../Footer";
import Carousels from "./homescreen/Carousels";
import HomeTab from "./homescreen/Home";
import Reviews from "./homescreen/Reviews";
// import HomeTab from "../HomeScreenComponent/Home/HomeTab";
// import HtmlTab from "../HomeScreenComponent/HtmlTab";

export const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseList());
    dispatch(getReview());
  }, [dispatch]);

  return (
    <>
      <Carousels />
      <HomeTab />
      <Container>
        <p>
          Please Write Your Reviews <a href="#write-review">Write Reviews</a>
        </p>
      </Container>
      <br />

      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <Image
              src="https://tse2.mm.bing.net/th?id=OIP.jt60nECehjyXrIklqmQ4yQHaEL&pid=Api&P=0&w=292&h=165"
              style={{ width: "100%", marginTop: "30px" }}
            />
          </Col>

          <Col lg={6} md={6} sm={12}>
            <p className="why_choose_us">
              why <span>choose us </span>?
            </p>
            <p className="why_choose_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              reprehenderit provident quae, repudiandae optio incidunt sunt
              perferendis nisi similique dicta, at tempora itaque ea in
              blanditiis debitis odio error dolorem quas doloremque velit omnis.
              Reiciendis eligendi, tenetur ipsum illo voluptates officia non
              suscipit nulla cupiditate, odio delectus omnis voluptatum enim
              illum aliquam voluptatibus ad minima molestias excepturi saepe
              architecto. Provident accusantium eius ex molestias, dicta
              pariatur debitis aut aliquid facilis maiores harum laudantium eum
              ipsa corrupti architecto. Praesentium incidunt voluptatum omnis
              libero minima tempora excepturi aliquid explicabo tempore beatae,
              ratione ab nostrum accusantium ad consequuntur id, alias, quia
              officiis quis.
              <br />
              <Link to="/about" style={{ color: "black" }}>
                Read More &nbsp;
                <FaArrowRight color="black" fontSize="13px" />
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <div className="about_site_container">
        <Container>
          <Row>
            <Col lg={3} md={3} sm={6} xs={6} className="about_site">
              <i className="pe-7s-smile mt-5 text-theme-color-2" />
              <AiOutlineSmile color="red" fontSize="50px" />
              <p>
                1000+
                <br />
                <span>students</span>
              </p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="about_site">
              <AiOutlineBook color="red" fontSize="50px" />
              <p>
                10
                <br />
                <span> courses</span>
              </p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="about_site">
              <AiOutlineContacts color="red" fontSize="50px" />
              <p>
                14
                <br />
                <span> teachers</span>
              </p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className="about_site">
              <AiOutlineVideoCamera color="red" fontSize="50px" />
              <p>
                50
                <br />
                <span>Blogs</span>
              </p>
            </Col>
          </Row>
          <br />
          <Reviews />
        </Container>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default HomeScreen;
