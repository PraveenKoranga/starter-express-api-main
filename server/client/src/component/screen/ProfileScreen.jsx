import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillEye, AiFillDelete } from "react-icons/ai";
import { Container, Table, Button } from "react-bootstrap";
import Loader from "../../shared/Loader";
import Message from "../../shared/Message";
import { Link } from "react-router-dom";
import NoBlogs from "./profilescreen/NoblogsScreen";
import UserDetail from "./profilescreen/UserDetail";
import { deleteBlog, usersBlog } from "../../action/profileAction";
import Users from "./profilescreen/Users";

const ProfileScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const userBlogs = useSelector((state) => state.userBlogs);
  const { loading, error, UsersBlog } = userBlogs;

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(usersBlog(match.params.email));
  }, [match, dispatch]);

  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  const blogDelete = (blogId) => {
    dispatch(deleteBlog(blogId, history, user.user.email));
  };

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container className="profileDetail">
          <div>
            <UserDetail user={user} totalBlogs={UsersBlog} />
          </div>
          <div className="userBlogs_container">
            <>
              {UsersBlog ? (
                <Container className="user_blogs">
                  {Object.keys(UsersBlog.result).length > 0 ? (
                    <>
                      <h2>Blogs</h2>
                    </>
                  ) : (
                    ""
                  )}
                  <Table striped bordered hover className="user_blogs_table">
                    {Object.keys(UsersBlog.result).length > 0 ? (
                      <>
                        <thead>
                          <tr>
                            <th style={{ textTransform: "uppercase" }}>
                              Title
                            </th>
                            <th style={{ textTransform: "uppercase" }}>
                              Category
                            </th>
                            <th style={{ textTransform: "uppercase" }}>
                              Description
                            </th>
                            <th style={{ textTransform: "uppercase" }}>
                              created Date
                            </th>
                            <th
                              colSpan="3"
                              style={{ textTransform: "uppercase" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                      </>
                    ) : (
                      <NoBlogs />
                    )}
                    {UsersBlog.result.map((blogs) => (
                      <tbody key={blogs._id}>
                        <tr>
                          <td>{blogs.title}</td>
                          <td>{blogs.category}</td>
                          <td>{addElipsis(blogs.description, 40)}</td>
                          <td>{blogs.createdDate}</td>
                          <td>
                            <Link
                              to={`/blog/update/${blogs._id}`}
                              className="links"
                            >
                              <AiFillEdit
                                color="orange"
                                className="blog_detail_edit"
                              />
                              UPDATE
                            </Link>
                          </td>
                          <td>
                            <Link className="links" to={`/blog/${blogs._id}`}>
                              <AiFillEye color="blue" /> VIEW
                            </Link>
                          </td>
                          <td>
                            <Button
                              className="button_links"
                              onClick={() => blogDelete(blogs._id)}
                            >
                              <AiFillDelete color="red" /> DELETE
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>{" "}
                  <Link to={"/"} style={{ float: "right" }}>
                    View All Blogs List
                  </Link>
                </Container>
              ) : (
                ""
              )}
            </>
            {user.user.isAdmin === true && <Users />}
          </div>
        </Container>
      )}
    </Container>
  );
};

export default ProfileScreen;
