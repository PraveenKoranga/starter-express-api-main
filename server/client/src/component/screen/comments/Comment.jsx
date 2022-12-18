import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteComment, listComments } from "../../../action/commentAction";

const Comment = ({ blog }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile"));

  const comments = useSelector((state) => state.comments);
  const { Comments } = comments;

  useEffect(() => {
    dispatch(listComments(blog._id));
  }, [dispatch, blog._id]);

  const removeComment = (comment) => {
    dispatch(deleteComment(comment._id, history, blog._id));
  };

  return (
    <>
      {Comments && (
        <Container>
          {Comments.map((comment) => (
            <Container className="comment_detail" key={comment._id}>
              <div>
                <p className="commenter_name">{comment.name}</p>
                <p>{comment.comment}</p>
              </div>

              <div>
                <p className="commentcreated_date">{comment.date}</p>
                {user && user.user.email === comment.email ? (
                  <AiFillDelete onClick={() => removeComment(comment)} />
                ) : (
                  ""
                )}
              </div>
            </Container>
          ))}
        </Container>
      )}
    </>
  );
};

export default Comment;
