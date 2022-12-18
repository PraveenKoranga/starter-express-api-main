import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Dropdown,
  Image,
} from "react-bootstrap";
// import { useDispatch } from "react-redux";

const Header = () => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    // const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    // dispatch({ type: "LOGOUT" });
    history.push("/login");
    localStorage.removeItem("profile");
    localStorage.removeItem("like");
    setUser(null);
  };

  return (
    <>
      <Navbar
        className="header"
        expand="lg"
        style={{
          top: "0",
          position: "fixed",
          width: "100%",
          zIndex: "1",
        }}
      >
        <Container>
          <Link to="/" className="navlink">
            <img
              src="https://api.freelogodesign.org/files/b73aaafca95a4407ac0b1a4c7ab06ebf/thumb/logo_200x200.png?v=0"
              alt=""
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="navlink">
                HOME
              </Link>
              <Link to="/Allcourses" className="navlink">
                COURSES
              </Link>
              <Link to="/blog" className="navlink">
                BLOG
              </Link>
              <Link to="/about" className="navlink">
                ABOUT
              </Link>
              <Link to="/contact" className="navlink">
                CONTACT
              </Link>
              {user ? (
                <div className="profile">
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                      <div>
                        {user.user.imageUrl ? (
                          <Image
                            className="profile_image"
                            src={user.user.imageUrl}
                            alt={user.user.name.charAt(0)}
                          />
                        ) : (
                          <div className="profile_name">
                            <p>{user.user.username.charAt(0)}</p>
                          </div>
                        )}
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown_menu">
                      <Dropdown.Item>
                        <Link to={`/profile/${user.user.email}`}>
                          <p className="userName">
                            {user.user.name || user.user.username}
                          </p>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="">
                        <Button
                          variant="secondary"
                          className="logout"
                          onClick={logout}
                        >
                          Logout
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <Link to="/login" className="navlink">
                  LOGIN
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Header;
