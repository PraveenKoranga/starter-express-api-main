import axios from "axios";
import {
  USERS_GET_FAIL,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USER_BLOGS_FAIL,
  USER_BLOGS_REQUEST,
  USER_BLOGS_SUCCESS,
  USER_DELETE_BLOG,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constant/user";

const URL = "https://mernelearning.herokuapp.com";
const URLs = "http://localhost:8030";

export const usersBlog = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_BLOGS_REQUEST });
    const { data } = await axios.get(`${URL}/profile/detail/${email}`);

    dispatch({ type: USER_BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_BLOGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBlog = (id, history, email) => async (dispatch) => {
  try {
    dispatch({ type: USER_DELETE_BLOG });
    await axios.delete(`${URL}/blog/delete/${id}`);

    history.push(`/profile/${email}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser =
  (id, username, email, history) => async (dispatch) => {
    try {
      dispatch({ type: USER_UPDATE_REQUEST });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `${URL}/profile/update/${id}`,
        {
          username,
          email,
        },
        config
      );

      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
      history.push(`/profile/${email}`);
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USERS_GET_REQUEST });
    const { data } = await axios.get(`${URLs}/profile/All/users`);
    dispatch({ type: USERS_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USERS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
