import React, { useEffect, useState } from "react";
import { Container, Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postComment } from "../../../action/commentAction";
import Comment from "./Comment";

const commentDate = new Date().toDateString();

const AllComments = ({ blog }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  const [name, setName] = useState("");
  const [postId, setPostId] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.user.name || user.user.username);
      setPostId(blog._id);
      setEmail(user.user.email);
      setDate(commentDate);
    }
  }, [blog, user]);

  const postComments = () => {
    dispatch(postComment(name, postId, email, date, comment));

    history.push(`/blog/${blog._id}`);
  };

  const redirect = () => {
    history.push("/login");
  };

  const imageUrl =
    "https://tse1.mm.bing.net/th?id=OIP.tHluP4chQzW31oRhD-mqogHaHa&pid=Api&P=0&w=300&h=300";

  return (
    <Container className="comment_main">
      <Container className="comment_box">
        {user ? (
          <>
            {user.user.imageUrl ? (
              <Image
                className="comments_userImage"
                src={user.user.imageUrl}
                alt={user.user.name.charAt(0)}
              />
            ) : (
              <div className="comments_userProfile">
                {user.user.name ? (
                  <p>{user.user.name.charAt(0)}</p>
                ) : (
                  <p>{user.user.username.charAt(0)}</p>
                )}
              </div>
            )}
          </>
        ) : (
          <Image src={imageUrl} className="comments_userImage" />
        )}

        <textarea
          onChange={(e) => setComment(e.target.value)}
          className="textarea"
          placeholder="Write Your Comment..."
        />
        {user ? (
          <Button
            onClick={() => postComments()}
            variant="primary"
            className="comment_post_button"
          >
            Post
          </Button>
        ) : (
          <Button
            onClick={() => redirect()}
            variant="primary"
            className="comment_post_button"
          >
            Post
          </Button>
        )}
      </Container>
      <br />

      <Comment blog={blog} key={blog._id} />

      <br />
    </Container>
  );
};

export default AllComments;
