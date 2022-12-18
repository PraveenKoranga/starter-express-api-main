import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Image, Button } from "react-bootstrap";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillBackward,
  AiFillLike,
} from "react-icons/ai";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";
import { blogDetail, deleteBlog, likeBlog } from "../../../action/blogAction";
import AllComments from "../comments/AllComments";

const BlogDetail = ({ match, history }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, BlogDetail } = blogDetails;

  const user = JSON.parse(localStorage.getItem("profile"));
  const like = JSON.parse(localStorage.getItem("like"));

  useEffect(() => {
    dispatch(blogDetail(match.params.id));
  }, [dispatch, match]);

  const blogDelete = () => {
    dispatch(deleteBlog(match.params.id, history));
  };

  const liked = () => {
    var property = document.getElementById("like-button");
    property.style.color = "blue";

    dispatch(likeBlog(match.params.id, user.user.email || user.email));

    console.log("like");
  };

  const BannerURL =
    "https://tse2.mm.bing.net/th?id=OIP.a5YOm_1N-oe-O025Jw4PTQHaE8&pid=Api&P=0&w=246&h=165";
  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {BlogDetail && (
              <Container className="blog_detail_main">
                <Image
                  src={BannerURL}
                  alt="BannerImage"
                  width="100%"
                  height="300px"
                />
                <Container className="blog_detail_body">
                  <Link to="/blog">
                    <Button>
                      <AiFillBackward /> BACK
                    </Button>
                  </Link>
                  {like ? (
                    <AiFillLike
                      className="like-button"
                      id="like-button"
                      onClick={() => liked()}
                      style={{ color: "blue" }}
                    />
                  ) : (
                    <AiFillLike
                      className="like-button"
                      id="like-button"
                      onClick={() => liked()}
                    />
                  )}

                  <div className="blog_detail_buttons">
                    <p>{BlogDetail.category}</p>
                    <div>
                      {((user && user.email) || (user && user.user.email)) ===
                      BlogDetail.email ? (
                        <div>
                          <AiFillDelete
                            onClick={() => blogDelete()}
                            color="red"
                            className="blog_detail_delete"
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <Link to={`/blog/update/${BlogDetail._id}`}>
                            <AiFillEdit
                              color="orange"
                              className="blog_detail_edit"
                            />
                          </Link>
                        </div>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                  <div className="blog_detail_title">
                    <p>{BlogDetail.title}</p>
                  </div>
                  <div className="blog_detail_description">
                    <p>{BlogDetail.description}</p>
                  </div>
                  <div className="blog_detail_footer">
                    <p></p>
                    <p>
                      <strong>By:</strong>
                      {BlogDetail.username}
                    </p>
                  </div>
                </Container>
                <AllComments blog={BlogDetail} />
              </Container>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default BlogDetail;
