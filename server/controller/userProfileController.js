import User from "../models/User.js";
import Blog from "../models/blogModel.js";

export const getUserDetail = async (req, res) => {
  try {
    const userDetail = await User.findById(req.params.id);
    res.status(201).json(userDetail);
  } catch (error) {
    res.status(404).json("User Not Found");
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(404).json("No User Yet !!");
  }
};

export const getUserBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({ email: req.params.email });
    res.status(200).json({ result: blogs });
  } catch (error) {
    res.status(404).json("no blogs");
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    const updateduser = await user.save();
    res.status(200).json({
      sucess: true,
      message: "User updated successfullr",
      user: updateduser,
    });
  } else {
    res.status(404).json("user not found");
  }
};
