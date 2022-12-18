import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";
import Footer from "../Footer";

const CoursesScreen = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const course = [
    "B-tech",
    "BCA",
    "BSC",
    "B-pharmacy",
    "BA",
    "MA",
    "Army",
    "SSC",
    "MSC",
    "Group-C",
  ];
  return (
    <>
      <div style={{ height: "500px", marginBottom: "50px" }}>
        <img
          src="https://www.thebalancecareers.com/thmb/3TXSZvKKQXcWu3Zu3qU8ag158MU=/3864x2577/filters:fill(auto,1)/school-books-on-desk--education-concept-871454068-5b548900c9e77c005b04fc8c.jpg"
          alt=""
          height="490px"
          width="100%"
        />
      </div>
      <Container>
        <Row>
          {user && (
            <>
              {user.user.isAdmin ? (
                <Link to="/createblog">
                  <Button variant="primary">ADD COURSES</Button>
                </Link>
              ) : (
                ""
              )}
            </>
          )}
        </Row>
        <br />
        <Row>
          {course.map((courses) => (
            <>
              <Col lg={3} md={6} sm={6} style={{ marginBottom: "50px" }}>
                <div className="course-box">
                  <div>
                    <Link to="/Allcourses/b-tech">
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.a3PLjaRMbKrtL-Jnr4rVsAHaGP&pid=Api&P=0&w=212&h=179"
                        width="100%"
                        height="300px"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className="total-course">100+ course</p>
                  <h3 className="branch-heading">{courses}</h3>
                  <p className="course-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint quae fuga labore dolore saepe voluptatum. Molestiae
                    sunt, veritatis maiores in illum, neque praesentium,
                    voluptate officiis laboriosam laudantium a optio iure.
                  </p>
                  <Link to="/Allcourses/b-tech">Courses</Link>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
      <br />
      <Footer />
    </>
  );
};

export default CoursesScreen;
