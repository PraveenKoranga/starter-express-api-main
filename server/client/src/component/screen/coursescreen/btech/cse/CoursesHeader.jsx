import React from "react";
import { Link } from "react-router-dom";

const CoursesHeader = () => {
  return (
    <>
      <div class="wrapper">
        <input data-function="swipe" id="swipe" type="checkbox" />
        <label data-function="swipe" for="swipe">
          <div class="spinner diagonal part-1"></div>
          <div class="spinner horizontal"></div>
          <div class="spinner diagonal part-2"></div>
        </label>

        <div class="content"></div>

        <div class="sidebar">
          <nav class="menu">
            <li>
              <Link className="alink" to="/Allcourses/b-tech/html/intro">
                intro
              </Link>
            </li>
            <li>
              <Link className="alink" to="/Allcourses/b-tech/html/getstarted">
                get started
              </Link>
            </li>
            <li>
              <Link className="alink" to="/Allcourses/b-tech/html/intro">
                intro
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
};

export default CoursesHeader;
