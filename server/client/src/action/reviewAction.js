import axios from "axios";
import {
  CREATE_REVIEW_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
} from "../constant/reviewConstant";

const URL = "https://mernelearning.herokuapp.com";
// const URL = "http://localhost:8030";

export const postReview =
  (name, image, email, date, review) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_REVIEW_REQUEST });
      const { data } = await axios.post(`${URL}/review/new`, {
        name,
        image,
        email,
        date,
        review,
      });
      dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getReview = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REVIEW_REQUEST });
    const { data } = await axios.get(`${URL}/review/AllReviews`);
    dispatch({ type: GET_REVIEW_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
