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

export const commentsReducer = (state = { Comment: [] }, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return { loading: true, Comment: [] };
    case CREATE_COMMENT_SUCCESS:
      return { loading: false, Comment: action.payload };
    case CREATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getCommentsReducer = (state = { Comments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return { loading: true, Comments: [] };
    case GET_COMMENT_SUCCESS:
      return { loading: false, Comments: action.payload };
    case GET_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COMMENT:
      return { blogDelete: action.payload };
    default:
      return state;
  }
};

export const getAllCommentsReducer = (state = { Allcomments: [] }, action) => {
  switch (action.type) {
    case GET_ALLCOMMENT_REQUEST:
      return { loading: true, Allcomments: [] };
    case GET_ALLCOMMENT_SUCCESS:
      return { loading: false, Allcomments: action.payload };
    case GET_ALLCOMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
