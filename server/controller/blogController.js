import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body);
    blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const blogDetail = async (req, res) => {
  try {
    const blogDetail = await Blog.findById(req.params.id);
    res.status(200).json(blogDetail);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const updateBlog = async (req, res) => {
  // console.log(req.body);
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    blog.title = req.body.title || blog.title;
    blog.createdDate = req.body.createdDate || blog.createdDate;
    blog.category = req.body.category || blog.category;
    blog.description = req.body.description || blog.description;
    const updatedBlog = await blog.save();
    res.status(200).json({
      sucess: true,
      message: "Blog updated successfullr",
      updatedBlog: updatedBlog,
    });
  } else {
    res.status(404);
    throw new Error("blog Not Found");
  }
};

export const deleteBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    await blog.delete();
    res.status(200).json({
      success: true,
      message: "blog delete successfully",
      deletedBlog: blog,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
