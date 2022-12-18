import express from "express";
import {
  getUserBlog,
  getUserDetail,
  getUsers,
  updateUser,
} from "../controller/userProfileController.js";

const profileRouter = express.Router();

profileRouter.route("/:id").get(getUserDetail);

profileRouter.route("/All/users").get(getUsers);

profileRouter.route("/detail/:email").get(getUserBlog);

profileRouter.route("/update/:id").put(updateUser);

export default profileRouter;
