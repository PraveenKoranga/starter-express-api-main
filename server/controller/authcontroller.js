import crypto from "crypto";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import { sendEmail } from "../utils/sendEmai.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    sendToken(user, res);
    // res.status(201).json({ success: true, token: "23e2cf2f4fv5" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "Please provide email or password" });
    // return next(new ErrorResponse("Please provide email or password",400))
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(404).json({ success: false, error: "Envalid credentials" });
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      res.status(404).json({ success: false, error: "Envalid credentials" });
    }

    sendToken(user, res);
    // res.status(200).json({
    //   success: true,
    //   token: "wfv3f3vbr43t4v4ve3g445",
    // });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });
      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.getResetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse("Email Could not be send", 500));
    }
  } catch (error) {
    next(error);
  }
};

export const resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid reset token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(201).json({ success: true, data: "Password Reset Success" });
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, res) => {
  const token = user.getSignedToken();
  res.status(200).json({ success: true, user, token });
};
