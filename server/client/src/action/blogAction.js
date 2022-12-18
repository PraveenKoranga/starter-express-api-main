import axios from "axios";
import {
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  GET_BLOGS_FAIL,
  GET_BLOGS_REQUEST,
  GET_BLOGS_SUCCESS,
  GET_BLOG_DETAIL_FAIL,
  GET_BLOG_DETAIL_REQUEST,
  GET_BLOG_DETAIL_SUCCESS,
  LIKED,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
} from "../constant/blog";

const URL = "https://mernelearning.herokuapp.com";

export const createBlog =
  (username, email, createdDate, title, category, description, history) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_BLOG_REQUEST });
      const { data } = await axios.post(`${URL}/blog/createblog`, {
        username,
        email,
        createdDate,
        title,
        category,
        description,
      });

      dispatch({ type: CREATE_BLOG_SUCCESS, payload: data });
      history.push("/blog");
    } catch (error) {
      dispatch({
        type: CREATE_BLOG_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listBlog = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOGS_REQUEST });
    const { data } = await axios.get(`${URL}/blog/`);

    dispatch({ type: GET_BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BLOGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const blogDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOG_DETAIL_REQUEST });
    const { data } = await axios.get(`${URL}/blog/${id}`);

    dispatch({ type: GET_BLOG_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_BLOG_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBlog = (id, history) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });
    const { data } = await axios.delete(`${URL}/blog/delete/${id}`);

    dispatch({ type: DELETE_BLOG_REQUEST, payload: data });
    history.push("/blog");
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateBlog =
  (history, id, username, createdDate, title, category, description) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_BLOG_REQUEST });
      const { data } = await axios.put(
        `${URL}/blog/update/${id}`,
        username,
        createdDate,
        title,
        category,
        description
      );

      dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data });
      history.push(`/blog/${id}`);
    } catch (error) {
      dispatch({
        type: UPDATE_BLOG_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const likeBlog = (id, email) => async (dispatch) => {
  try {
    const data = { like: { id: id, email: email } };
    dispatch({ type: LIKED, payload: data });
  } catch (error) {
    console.log(error);
  }
};
