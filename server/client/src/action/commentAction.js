import axios from "axios";
import {
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  DELETE_COMMENT,
  GET_ALLCOMMENT_FAIL,
  GET_ALLCOMMENT_REQUEST,
  GET_ALLCOMMENT_SUCCESS,
  GET_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
} from "../constant/blog";

// const URL = "http://localhost:8030";
const URL = "https://mernelearning.herokuapp.com";

export const postComment =
  (name, postId, email, date, comment) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_COMMENT_REQUEST });
      const { data } = await axios.post(`${URL}/blog/comment/new`, {
        name,
        postId,
        email,
        date,
        comment,
      });
      dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listComments = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMMENT_REQUEST });
    const { data } = await axios.get(`${URL}/blog/comments/${id}`);
    dispatch({ type: GET_COMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteComment = (id, history, blogId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COMMENT });
    await axios.delete(`${URL}/blog/comment/delete/${id}`);
    history.push(`/blog/${blogId}`);
  } catch (error) {
    console.log("error while calling deletePost=>", error);
  }
};

export const getAllComments = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALLCOMMENT_REQUEST });
    const { data } = await axios.get(`${URL}/blog/comment/Allcomment`);
    dispatch({ type: GET_ALLCOMMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALLCOMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
