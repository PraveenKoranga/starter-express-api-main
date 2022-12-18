import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseDetail } from "../../../action/courseAction";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";

const CourseDetails = ({ match }) => {
  const dispatch = useDispatch();

  const CourseDetail = useSelector((state) => state.CourseDetail);
  const { loading, error, courseDetails } = CourseDetail;

  useEffect(() => {
    dispatch(courseDetail(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Container>
      <br />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {courseDetails ? (
            <Row>
              <Col>
                <Container className="language_name">
                  <h1>{courseDetails.name}</h1>
                </Container>
                <h3>{courseDetails.title}</h3>
                <p>{courseDetails.description}</p> <br />
                <Container className="button_box">
                  <Link to="/" className="link">
                    <AiOutlineArrowLeft />
                    Back
                  </Link>
                  <br />
                  <Link to={`/language/${courseDetails.name}`} className="link">
                    Start Learning
                  </Link>
                </Container>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </>
      )}
    </Container>
  );
};

export default CourseDetails;
