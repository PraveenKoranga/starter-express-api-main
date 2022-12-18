import Review from "../models/reviewModel.js";

export const newReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    review.save();
    res.status(200).json("revies saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReview = async (req, res) => {
  try {
    const review = await Review.find();
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json(error);
  }
};
