import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  courseDetailReducer,
  courseListReducer,
} from "./reducer/courseReducer";
import {
  createBlogReducer,
  deleteBlogReducer,
  getBlogReducer,
  getBogDetails,
  likeBlogReducer,
  updateBlogReducer,
} from "./reducer/blogReducer";
import { loginUserReducer, registerUserReducer } from "./reducer/userReducer";
import {
  getAllUsersReducer,
  getUserBlogsReducer,
  updateUserReducer,
} from "./reducer/profileReducer";
import {
  commentsReducer,
  getAllCommentsReducer,
  getCommentsReducer,
} from "./reducer/commentReducer";
import { getReviewReducer, newReviewReducer } from "./reducer/reviewReducer";

const reducer = combineReducers({
  CourseList: courseListReducer,
  CourseDetail: courseDetailReducer,
  blogList: getBlogReducer,
  createdBlog: createBlogReducer,
  blogDetails: getBogDetails,
  updateBlog: updateBlogReducer,
  deleteBlog: deleteBlogReducer,
  userRegister: registerUserReducer,
  userLogin: loginUserReducer,
  userBlogs: getUserBlogsReducer,
  totalUsers: getAllUsersReducer,
  comment: commentsReducer,
  comments: getCommentsReducer,
  userUpdate: updateUserReducer,
  AllComments: getAllCommentsReducer,
  newReview: newReviewReducer,
  reviews: getReviewReducer,
  like: likeBlogReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
