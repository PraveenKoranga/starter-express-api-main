import express from "express";
import {
  forgotpassword,
  login,
  register,
  resetpassword,
} from "../controller/authcontroller.js";

const authRoutes = express.Router();

authRoutes.route("/register").post(register);

authRoutes.route("/login").post(login);

authRoutes.route("/forgotpassword").post(forgotpassword);

authRoutes.route("/resetpassword/:resetToken").put(resetpassword);

export default authRoutes;
