import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";
// import Carousels from "./Carousels";

const HomeTab = () => {
  // const dispatch = useDispatch();

  const CourseList = useSelector((state) => state.CourseList);
  const { loading, error, courses } = CourseList;

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <>
      <br />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="main_container">
          <Container className="main_container">
            <p className="our_courses_heading">
              Our <span>Populer Courses</span>
            </p>
            <Row>
              {courses ? (
                <>
                  {courses.map((language) => (
                    <Col
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      className="language_card"
                      key={language._id}
                    >
                      <Card className="card">
                        <Card.Img
                          variant="top"
                          height="150px"
                          src={language.image}
                        />
                        <Card.Body>
                          <Card.Title className="card_title">
                            {addElipsis(language.title, 50)}
                            <br />
                            <p></p>
                            {/* <Link
                            to={`/home/${language.id}`}
                            className="link more_button"
                          >
                            More..
                          </Link> */}
                          </Card.Title>
                          <Card.Text className="goto_example_button_box">
                            <Link
                              to={`/course/${language._id}`}
                              className="link"
                            >
                              {language.gotolearnpage}
                            </Link>
                            <Link
                              to={`/example/${language.name}`}
                              variant="primary"
                              className="link"
                            >
                              {language.example}
                            </Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <br />
                    </Col>
                  ))}
                </>
              ) : (
                ""
              )}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default HomeTab;
