import express from "express";
import { getCourse, getCourses } from "../controller/courseController.js";
// import { insertCourses } from "../models/courseModel.js";

const courseRoute = express.Router();

// courseRoute.post("/insertcourse", insertCourses);

courseRoute.get("/", getCourses);

courseRoute.get("/:id", getCourse);

export default courseRoute;
