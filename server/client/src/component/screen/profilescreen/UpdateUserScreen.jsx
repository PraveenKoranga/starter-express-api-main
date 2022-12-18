import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Image,
  Button,
} from "react-bootstrap";
import { updateUser } from "../../actions/auth";

const UpdateUserDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  const { success } = userProfileUpdate;

  useEffect(() => {
    setFirstName(user.result.givenName || user.result.name.split(" ")[0]);
    setLastName(user.result.familyName || user.result.name.split(" ")[1]);
    setEmail(user.result.email);
  }, [
    user.result.givenName,
    user.result.familyName,
    user.result.email,
    user.result.name,
  ]);

  const userUpdate = () => {
    history.push(`/profile/${user.result.email}`);
  };
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  return (
    <>
      <br />
      <Container className="login_box">
        <Card className="form_card">
          {user.result.imageUrl ? (
            <>
              <Image
                src={user.result.imageUrl}
                alt=""
                className="image_profile"
              />
              <br />
            </>
          ) : (
            <>
              <div className="image_profile_noName">
                <p>{user.result.name.charAt(0)}</p>
              </div>
              <br />
            </>
          )}
          <br />
          <Form>
            <>
              <Row>
                <Col lg={6} md={6} xs={6}>
                  <Form.Group controlId="firstName">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      autoFocus="true"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={6} md={6} xs={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br />
              {/* <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                ></Form.Control>
              </Form.Group> */}
              <Button
                variant="primary"
                className="publish_button"
                onClick={() => userUpdate()}
              >
                UPDATE
              </Button>
            </>
          </Form>
          <br />
        </Card>
      </Container>
    </>
  );
};

export default UpdateUserDetail;
