import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookMessenger,
  FaHeart,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const BlogsScreen = ({ blog }) => {
  const AllComments = useSelector((state) => state.AllComments);
  const { Allcomments } = AllComments;

  const data = Allcomments.map((comments) => {
    if (blog._id === comments.postId) {
      return [comments.postId].length;
    } else {
      return 0;
    }
  });

  const totalComments = data.reduce((a, b) => a + b, 0);

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  const date = blog.createdDate.split(" ")[2];
  const month = blog.createdDate.split(" ")[1];
  return (
    <>
      <Container className="blog_card">
        <div className="Blogcard_top">
          <div className="date_title_box">
            <div className="date_month">
              <p>
                {date}
                <br />
                {month}
              </p>
            </div>
            <div>
              <p className="blogcard_title">{addElipsis(blog.title, 50)}</p>
              <p>
                &nbsp;&nbsp;
                <FaFacebookMessenger />
                {totalComments}
                &nbsp;comments &nbsp;&nbsp;&nbsp;
                <FaHeart />
                0&nbsp;likes
              </p>
            </div>
          </div>
        </div>

        <p className="blogcard_category">{addElipsis(blog.category, 50)}</p>

        <p className="blogcard_description">
          {addElipsis(blog.description, 150)}
        </p>

        <div className="viewblog_box">
          <Link className="view_blog" to={`/blog/${blog._id}`}>
            VIEW BLOG
            <FaRegArrowAltCircleRight />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default BlogsScreen;
