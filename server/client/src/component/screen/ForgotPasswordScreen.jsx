import axios from "axios";
import { Card } from "react-bootstrap";
import React, { useState } from "react";
import Message from "../../shared/Message";

const URL = "http://localhost:8030";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotpasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${URL}/auth/forgotpassword`,
        { email },
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
      <Card className="form_card">
        <form onSubmit={forgotpasswordHandler}>
          <h3 className="forgot_password_heading">Forgot Password</h3>
          {error && <Message>{error}</Message>}
          {success && <Message>{success}</Message>}
          <div>
            <p className="forgot_password_alert">
              Please enter the eamil address you registeryour account with. We
              will send you reset password confermation to this email
            </p>
            <label htmlFor="email">Email:</label>
            <input
              className="forgot_password_email"
              type="email"
              required
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="forgot_password_sendEmail_button">
            Send Mail
          </button>
        </form>
      </Card>
    </>
  );
};

export default ForgotPasswordScreen;
