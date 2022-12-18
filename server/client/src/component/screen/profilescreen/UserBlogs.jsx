import React from "react";
import { Container, Card } from "react-bootstrap";

const UserBlog = ({ blog }) => {
  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };
  return (
    <>
      <Container>
        <Card className="userblog_card">
          <div className="userBlog_title">
            <p>{blog.title}</p>
            <p>{blog.createdDate}</p>
          </div>

          <p>{addElipsis(blog.description, 100)}</p>
        </Card>
      </Container>
    </>
  );
};

export default UserBlog;
