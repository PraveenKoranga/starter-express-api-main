import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image:{
    type:String
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("review", ReviewSchema);

export default Review;
