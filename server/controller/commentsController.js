import Comment from "../models/commentModel.js";

export const newComments = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    comment.save();
    res.status(200).json("comment saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    await comment.delete();
    res.status(200).json("comment deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json(error);
  }
};

// export const deleteAllComment = async (req, res) => {
//   try {
//     const comment = await Comment.find({ postId: req.params.id });
//     await comment.delete();
//     res.status(200).json("delete");
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
