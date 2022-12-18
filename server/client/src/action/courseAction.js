import axios from "axios";
import {
  GET_COURSE_DETAIL_FAIL,
  GET_COURSE_DETAIL_REQUEST,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_FAIL,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
} from "../constant/courseConstant";

const URL = "https://mernelearning.herokuapp.com";

export const courseList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COURSE_REQUEST });
    const { data } = await axios.get(`${URL}/courses/`);
    // console.log(data);

    dispatch({ type: GET_COURSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_COURSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const courseDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_COURSE_DETAIL_REQUEST });
    const { data } = await axios.get(`${URL}/courses/${id}`);
    // console.log(data);

    dispatch({ type: GET_COURSE_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_COURSE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
