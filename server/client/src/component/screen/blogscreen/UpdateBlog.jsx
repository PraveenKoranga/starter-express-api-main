import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Image,
  Button,
  Alert,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";
import { updateBlog } from "../../../action/blogAction";

const CreatedDate = new Date().toDateString();

const UpdateBlog = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, BlogDetail } = blogDetails;

  const user = JSON.parse(localStorage.getItem("profile"));

  const [username, setuserName] = useState("");
  const [title, setTitle] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  // const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (BlogDetail) {
      setuserName(user.name || user.user.username);
      setCreatedDate(CreatedDate);
      setTitle(BlogDetail.title);
      setCategory(BlogDetail.category);
      setDescription(BlogDetail.description);
    } else {
      history.push(`/blog/${match.params.id}`);
    }
  }, [history, BlogDetail, user.name, user.user.username, match]);

  const blogUpdate = () => {
    dispatch(
      updateBlog(history, match.params.id, {
        username,
        createdDate,
        title,
        category,
        description,
      })
    );
  };

  const BannerURL =
    "https://tse2.mm.bing.net/th?id=OIP.a5YOm_1N-oe-O025Jw4PTQHaE8&pid=Api&P=0&w=246&h=165";
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Image
            src={BannerURL}
            alt="BannerImage"
            width="100%"
            height="300px"
          />
          <br />
          <br />
          <Alert variant="warning">
            <strong>Alert ! </strong>
            <br />
            which changes you will do here, all things are updated and your old
            blog will be updated.
          </Alert>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                <strong>TITLE :</strong>
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="createblog_input"
                  type="text"
                  placeholder="Enter The Title of blog..."
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                <strong>CATEGORY :</strong>
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="createblog_input"
                  type="text"
                  placeholder="Enter The Category of blog..."
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                <strong> DESCRIPTION OR BLOG DETAILS :</strong>
              </Form.Label>
              <Col sm="10">
                <textarea
                  className="createblog_input"
                  rows="3"
                  placeholder="Enter The Description or Details of blog..."
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Button
              variant="primary"
              className="publish_button"
              onClick={() => blogUpdate()}
            >
              UPDATE
            </Button>
          </Form>
          <Link to={`/blog/${match.params.id}`}>
            <Button variant="primary">
              <AiFillBackward />
              Back
            </Button>
          </Link>
        </Container>
      )}
    </>
  );
};

export default UpdateBlog;
