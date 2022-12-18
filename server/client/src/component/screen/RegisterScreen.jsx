import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { AiFillLock, AiFillGoogleCircle } from "react-icons/ai";
import { GoogleLogin } from "react-google-login";

import { useDispatch } from "react-redux";
import Message from "../../shared/Message";
import { Link } from "react-router-dom";
import { registerUser } from "../../action/userAction";
// import Loader from "../../shared/Loader";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      history.push("Home");
    }
  }, [history]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password Do Not Match");
    }

    dispatch(registerUser(username, email, password, config, history));
  };

  const googleSuccess = async (res) => {
    // console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      //   dispatch({ type: "AUTH", data: { result, token } });
      localStorage.setItem("profile", JSON.stringify(result, token));
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailur = () => {
    console.log("Google Sign In was unsuccessfull. try again later");
  };
  return (
    <>
      <Container className="login_box">
        <Card className="form_card">
          <AiFillLock varient="danger" className="lock_icon" />
          {error && <Message varient="danger">{error}</Message>}
          <Form onSubmit={submitHandler}>
            <>
              <Form.Group controlId="firstName">
                <Form.Control
                  type="text"
                  placeholder="Enter username *"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus={true}
                  required
                ></Form.Control>
              </Form.Group>

              <br />
            </>

            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Address *"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="password">
              <Form.Control
                type="password"
                placeholder="Password *"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <>
              <br />
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password *"
                  name="confirmPassword"
                  id="confirmpassword"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </>

            <br />

            <Button type="submit" varient="primary" className="form_submit">
              Register
            </Button>

            <br />
            <br />
            <GoogleLogin
              clientId="623404801924-gpslvq6mrjbcfsq92oou89lg5q3eplu9.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className="google_button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <AiFillGoogleCircle /> Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailur}
              cookiePolicy="single_host_origin"
            />
            <br />
            <Row>
              <Col>
                <Button variant="secondary" className="switch_button">
                  Already have an account ? <Link to="/login">Login</Link>
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default RegisterScreen;
