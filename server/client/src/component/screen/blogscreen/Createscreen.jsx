import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Image, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createBlog } from "../../../action/blogAction";

const CreatedDate = new Date().toDateString();

const CreateBlogScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [createdDate, setCreatedDate] = useState(CreatedDate);
  // const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    setCreatedDate(CreatedDate);
    if (user) {
      setuserName(user.user.name || user.user.username);
      setEmail(user.user.email);
    } else {
      setuserName(" ");
      setEmail(" ");
    }
  }, [user]);

  const saveBlog = () => {
    dispatch(
      createBlog(
        username,
        email,
        createdDate,
        title,
        category,
        description,
        history
      )
    );
  };
  const BannerURL =
    "https://tse2.mm.bing.net/th?id=OIP.a5YOm_1N-oe-O025Jw4PTQHaE8&pid=Api&P=0&w=246&h=165";
  return (
    <>
      <Container>
        <Image src={BannerURL} alt="BannerImage" width="100%" height="300px" />
        <br />
        <br />

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
            onClick={() => saveBlog()}
          >
            PUBLISH
          </Button>
        </Form>
        <Link to="/blog">
          <Button variant="primary">
            <AiFillBackward />
            Back
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default CreateBlogScreen;
