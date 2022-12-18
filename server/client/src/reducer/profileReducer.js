import {
  USERS_GET_FAIL,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USER_BLOGS_FAIL,
  USER_BLOGS_REQUEST,
  USER_BLOGS_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constant/user";

export const getUserBlogsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_BLOGS_REQUEST:
      return { loading: true, UsersBlog: [] };
    case USER_BLOGS_SUCCESS:
      return { loading: false, UsersBlog: action.payload };
    case USER_BLOGS_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true, UpdatedUser: [] };
    case USER_UPDATE_SUCCESS:
      localStorage.removeItem("profile");
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return { loading: false, UpdatedUser: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const getAllUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case USERS_GET_REQUEST:
      return { loading: true, TotalUser: [] };
    case USERS_GET_SUCCESS:
      return { loading: false, TotalUser: action.payload };
    case USERS_GET_FAIL:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
