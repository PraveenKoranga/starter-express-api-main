import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import AboutScreen from "./component/screen/AboutScreen";
import BlogScreen from "./component/screen/BlogScreen";
import BlogDetail from "./component/screen/blogscreen/BlogDetails";
import CreateBlogScreen from "./component/screen/blogscreen/Createscreen";
import UpdateBlog from "./component/screen/blogscreen/UpdateBlog";
import ContactScreen from "./component/screen/ContactScreen";
import CseAllCourses from "./component/screen/coursescreen/btech/cse/CseAllCourses";
import HTML from "./component/screen/coursescreen/btech/cse/html/HTML";
import Course from "./component/screen/coursescreen/Course";
import CoursesScreen from "./component/screen/CoursesScreen";
import JavaScriptExample from "./component/screen/example/javascript/example";
import ForgotPasswordScreen from "./component/screen/ForgotPasswordScreen";
import HomeScreen from "./component/screen/HomeScreen";
import CourseDetails from "./component/screen/homescreen/CourseDetails";
import LoginScreen from "./component/screen/LoginScreen";
import ProfileScreen from "./component/screen/ProfileScreen";
import UpdateUser from "./component/screen/profilescreen/UpdateUser";
import RegisterScreen from "./component/screen/RegisterScreen";
import ResetPasswordScreen from "./component/screen/ResetPasswordScreen";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/example/:name" component={JavaScriptExample} exact />
        <Route path="/course/:id" component={CourseDetails} exact />
        <Route path="/Allcourses" component={CoursesScreen} exact />
        <Route path="/Allcourses/b-tech" component={Course} exact />
        <Route
          path="/Allcourses/b-tech/All-Courses"
          component={CseAllCourses}
          exact
        />
        <Route path="/Allcourses/b-tech/html" component={HTML} exact />

        <Route path="/blog" component={BlogScreen} exact />
        <Route path="/createblog" component={CreateBlogScreen} exact />
        <Route path="/blog/:id" component={BlogDetail} exact />
        <Route path="/blog/update/:id" component={UpdateBlog} exact />
        <Route path="/about" component={AboutScreen} exact />
        <Route path="/contact" component={ContactScreen} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/forgotpassword" component={ForgotPasswordScreen} exact />
        <Route path="/profile/:email" component={ProfileScreen} exact />
        <Route path="/profile/update/:email" component={UpdateUser} exact />
        <Route
          path="/resetpassword/:resetToken"
          component={ResetPasswordScreen}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
