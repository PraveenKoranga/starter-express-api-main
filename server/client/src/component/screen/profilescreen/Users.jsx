import React from "react";
import { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../../action/profileAction";
import Loader from "../../../shared/Loader";
import Message from "../../../shared/Message";

const Users = () => {
  const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.totalUsers);
  const { loading, TotalUser, error } = totalUsers;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {TotalUser ? (
            <Container className="user_blogs">
              {TotalUser.length > 0 ? <h2>Users</h2> : ""}
              <Table striped bordered hover className="user_blogs_table">
                {TotalUser.length > 0 ? (
                  <>
                    <thead>
                      <tr>
                        <th style={{ textTransform: "uppercase" }}>ID</th>
                        <th style={{ textTransform: "uppercase" }}>Username</th>
                        <th style={{ textTransform: "uppercase" }}>email</th>
                        <th style={{ textTransform: "uppercase" }}>Admin</th>
                      </tr>
                    </thead>
                  </>
                ) : (
                  ""
                )}

                <>
                  {TotalUser.map((user) => (
                    <>
                      <tbody key={user._id}>
                        <tr>
                          <td>{user._id}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.isAdmin === true ? "YES" : "NO"}</td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                </>
              </Table>
              <Link to={"/"} style={{ float: "right" }}>
                View All Users List
              </Link>
            </Container>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Users;
