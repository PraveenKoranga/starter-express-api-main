import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Image,
  Button,
} from "react-bootstrap";
import { updateUser } from "../../../action/profileAction";
import Message from "../../../shared/Message";
const UpdateUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noUpdate, setNoupdate] = useState("");

  //   const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  //   const { success } = userProfileUpdate;

  useEffect(() => {
    if (user.user.name) {
      setTimeout(() => {
        setNoupdate("");
        history.push(`/profile/${user.user.email}`);
      }, 5000);
      return setNoupdate(
        "You Can't Update Your Profile, Because You Logged In Through Google !!!"
      );
    } else {
      setName(user.user.username);

      setEmail(user.user.email);
    }
  }, [user.user.email, user.user.username, user.user.name, history]);

  const userUpdate = () => {
    dispatch(updateUser(user.user._id, name, email, history));
  };

  return (
    <>
      {noUpdate && <Message variant="danger">{noUpdate}</Message>}
      <Container className="login_box">
        <Card className="form_card">
          {user.user.imageUrl ? (
            <>
              <Image
                src={user.user.imageUrl}
                alt=""
                className="image_profile"
              />
              <br />
            </>
          ) : (
            <>
              <div className="image_profile_noName">
                {user.user.name ? (
                  <p>{user.user.name.charAt(0)}</p>
                ) : (
                  <p>{user.user.username.charAt(0)}</p>
                )}
              </div>
              <br />
            </>
          )}
          <br />
          <Form>
            <>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <Form.Group controlId="username">
                    <Form.Control
                      type="text"
                      placeholder="UserName"
                      name="username"
                      autoFocus={true}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
              {user.user.username && (
                <Row>
                  <Col lg={12} md={12} xs={12}>
                    <Link to={`/forgotpassword`}>Update Password</Link>
                  </Col>
                </Row>
              )}

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

export default UpdateUser;
