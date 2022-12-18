import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CseAllCourses = () => {
  const courses = ["HTML", "CSS", "PYTHON", "JAVASCRIPT", "JAVA", "ST"];
  return (
    <>
      <Container>
        <Row>
          {courses.map((courses) => (
            <>
              <Col lg={3} md={6} sm={6} style={{ marginBottom: "50px" }}>
                <div className="course-box">
                  <div>
                    <Link to="/Allcourses/b-tech/html">
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.a3PLjaRMbKrtL-Jnr4rVsAHaGP&pid=Api&P=0&w=212&h=179"
                        width="100%"
                        height="300px"
                        alt=""
                      />
                    </Link>
                  </div>
                  {/* <p className="total-course">100+ course</p> */}
                  <h3 className="branch-heading">{courses}</h3>
                  <p className="course-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint quae fuga labore dolore saepe voluptatum. Molestiae
                    sunt, veritatis maiores in illum, neque praesentium,
                    voluptate officiis laboriosam laudantium a optio iure.
                  </p>
                  <Link to="/Allcourses/b-tech/html">LEARN</Link>
                  <Link to="/Allcourses/b-tech/html" style={{ float: "right" }}>
                    EXAMPLE
                  </Link>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CseAllCourses;
