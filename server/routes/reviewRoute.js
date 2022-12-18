import express from "express";
import { getReview, newReview } from "../controller/reviewController.js";

const reviewRoute = express.Router();

reviewRoute.post("/new", newReview);
reviewRoute.get("/AllReviews", getReview);

export default reviewRoute;
