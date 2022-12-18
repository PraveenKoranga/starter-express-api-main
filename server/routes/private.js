import express from "express";
import { getPrivatedata } from "../controller/private.js";
import { protect } from "../middleware/protect.js";

const privateRoute = express.Router();

privateRoute.route("/").get(protect, getPrivatedata);

export default privateRoute;
