import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoursesHeader from "../CoursesHeader";
import getstarted from "./getstarted";
import introHtml from "./introHtml";

const HTML = () => {
  return (
    <BrowserRouter>
      <CoursesHeader />
      <Switch>
        <Route path="/Allcourses/b-tech/html/" component={introHtml} exact />
        <Route
          path="/Allcourses/b-tech/html/intro"
          component={introHtml}
          exact
        />
        <Route
          path="/Allcourses/b-tech/html/getstarted"
          component={getstarted}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default HTML;
