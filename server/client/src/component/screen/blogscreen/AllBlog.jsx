import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";
import { listBlog } from "../../../action/blogAction";
import BlogsScreen from "./BlogsScreen";

const AllBlog = () => {
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, Blogs } = blogList;

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(listBlog());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Table>
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th>
                    {user && (
                      <>
                        {user.user.isAdmin ? (
                          <Link to="/createblog">
                            <Button variant="primary">CREATE BLOG</Button>
                          </Link>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </th>
                  <th>
                    <div className="search_blog_box">
                      <input
                        type="search"
                        placeholder="Search Here..."
                        className="search_blog"
                        onChange={(e) => setSearchItem(e.target.value)}
                      />

                      <FaSearch />
                    </div>
                  </th>
                </tr>
              </thead>
            </Table>
            {Blogs && (
              <>
                {Blogs.filter((val) => {
                  if (searchItem === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return val;
                  } else {
                    return 0;
                  }
                }).map((blog) => (
                  <Col lg={12} md={12} sm={12} key={blog._id}>
                    <BlogsScreen blog={blog} key={blog._id} />
                  </Col>
                ))}
              </>
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

export default AllBlog;
