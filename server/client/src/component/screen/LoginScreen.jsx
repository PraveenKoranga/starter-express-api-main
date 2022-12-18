import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { AiFillLock, AiFillGoogleCircle } from "react-icons/ai";
import { GoogleLogin } from "react-google-login";

import { useDispatch, useSelector } from "react-redux";
import Message from "../../shared/Message";
import { Link } from "react-router-dom";
import { loginUser } from "../../action/userAction";
import Loader from "../../shared/Loader";
// import Loader from "../../shared/Loader";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    dispatch(loginUser(email, password, config, history));
  };

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      history.push("/");
    }
  }, [history]);

  const googleSuccess = async (res) => {
    // console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      // dispatch({ type: "USER_LOGIN_SUCCESS", data: { result, token } });
      localStorage.setItem(
        "profile",
        JSON.stringify({ user: result, token: token })
      );
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
      {loading ? (
        <Loader />
      ) : (
        <Container className="login_box">
          <Card className="form_card">
            <AiFillLock varient="danger" className="lock_icon" />

            {error && <Message>{error}</Message>}
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email Address *"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus={true}
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password *"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <Link to="/forgotpassword">Forgot Password?</Link>
              <br />
              <Button type="submit" varient="primary" className="form_submit">
                Login
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
                    Don't have an account ? <Link to="/register">Register</Link>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Container>
      )}
    </>
  );
};

export default LoginScreen;
