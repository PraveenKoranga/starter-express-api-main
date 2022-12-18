import React from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NoBlogs = ({ blogs, user }) => {
  return (
    <>
      <Container>
        <Alert variant="warning">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
          <div className="noblogButtons">
            <Link to="/createblog">
              <Button variant="primary" className="noblogscreatebutton">
                CREATE BLOG
              </Button>
            </Link>

            <Link to="/blog">
              <Button variant="primary" className="noblogsallblogbutton">
                ALL BLOG
              </Button>
            </Link>
          </div>
        </Alert>
      </Container>
    </>
  );
};

export default NoBlogs;
