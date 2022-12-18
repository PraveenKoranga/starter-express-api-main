import React, { useEffect, useState } from "react";
import { Card, Image, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const UserDetail = ({ totalBlogs }) => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [totalblogs, setTotalblogs] = useState([]);
  const [loginUser, setLoginUser] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  //   const userDetails = useSelector((state) => state.userDetails);
  //   const { loading, error, user } = userDetails;

  //   const userLogin = useSelector((state) => state.userLogin);
  //   const { userInfo } = userLogin;

  useEffect(() => {
    // dispatch(getUserDetails("profile"));
    if (totalBlogs) {
      setTotalblogs(Object.keys(totalBlogs.result).length);
    } else {
      setTotalblogs("0");
    }
  }, [totalBlogs]);

  const logout = () => {
    // dispatch({ type: "LOGOUT" });
    localStorage.removeItem("profile");
    history.push("/login");
    setLoginUser(null);
  };
  return (
    <>
      <br />
      <Card className="profileCard">
        <br />
        {loginUser.user.imageUrl ? (
          <>
            <Image
              src={loginUser.user.imageUrl}
              alt=""
              className="image_profile"
            />
            <br />
          </>
        ) : (
          <>
            <div className="image_profile_noName">
              <p>{loginUser.user.username.charAt(0)}</p>
            </div>
            <br />
          </>
        )}

        <p>{loginUser.user.name || loginUser.user.username}</p>
        <br />

        <p>{loginUser.user.email}</p>
        <br />
        <p>Total Blogs: {totalblogs}</p>
        <br />
        <Link
          to={`/profile/update/${loginUser.user.email}`}
          className="userdetail_links"
        >
          EDIT PROFILE
        </Link>
        <br />
        <Button variant="none" className="userdetail_links" onClick={logout}>
          LOGOUT
        </Button>
        <br />
      </Card>
    </>
  );
};

export default UserDetail;
