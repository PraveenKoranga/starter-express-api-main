import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import Message from "../../shared/Message";

const URL = "http://localhost:8030";

const ResetPasswordScreen = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetpasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password Don't Match");
    }
    try {
      const { data } = await axios.put(
        `${URL}/auth/resetpassword/${match.params.resetToken}`,
        { password },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <>
        <Container className="login_box">
          <Card className="form_card">
            <h3>Reset Password</h3>
            {error && <Message>{error}</Message>}
            {success && (
              <Message>
                {success}
                <Link to="/login">login</Link>
              </Message>
            )}
            <Form onSubmit={resetpasswordHandler}>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Enter New Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></Form.Control>
              </Form.Group>
              <br />
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  required
                  id="confirmpassword"
                  placeholder="Enter New confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <br />

              <button type="submit">Reset Password</button>
              <br />
            </Form>
          </Card>
        </Container>
      </>
    </>
  );
};

export default ResetPasswordScreen;
