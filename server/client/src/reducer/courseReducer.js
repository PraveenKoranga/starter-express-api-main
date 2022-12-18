import {
  GET_COURSE_REQUEST,
  GET_COURSE_FAIL,
  GET_COURSE_SUCCESS,
  GET_COURSE_DETAIL_REQUEST,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAIL,
} from "../constant/courseConstant";

export const courseListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_REQUEST:
      return { loading: true, courses: [] };
    case GET_COURSE_SUCCESS:
      return { loading: false, courses: action.payload };
    case GET_COURSE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const courseDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COURSE_DETAIL_REQUEST:
      return { loading: true, courseDetails: [] };
    case GET_COURSE_DETAIL_SUCCESS:
      return { loading: false, courseDetails: action.payload };
    case GET_COURSE_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
