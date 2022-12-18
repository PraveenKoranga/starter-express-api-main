import express from "express";
import {
  blogDetail,
  createBlog,
  deleteBlog,
  getBlog,
  updateBlog,
} from "../controller/blogController.js";
import {
  deleteComment,
  getAllComments,
  getComments,
  newComments,
} from "../controller/commentsController.js";

const blogRoutes = express.Router();

blogRoutes.route("/createblog").post(createBlog);

blogRoutes.route("/").get(getBlog);

blogRoutes.route("/:id").get(blogDetail);

blogRoutes.route("/update/:id").put(updateBlog);

blogRoutes.route("/delete/:id").delete(deleteBlog);

// COMMENTS ROUTES

blogRoutes.post("/comment/new", newComments);

blogRoutes.get("/comments/:id", getComments);

blogRoutes.delete("/comment/delete/:id", deleteComment);

blogRoutes.get("/comment/Allcomment", getAllComments);

// blogRouter.delete("/comments/delete/:id", deleteAllComment);

export default blogRoutes;
