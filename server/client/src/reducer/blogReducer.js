import {
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
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

export const createBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return { loading: true, Blog: [] };
    case CREATE_BLOG_SUCCESS:
      return { loading: false, Blog: action.payload };
    case CREATE_BLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BLOGS_REQUEST:
      return { loading: true, Blogs: [] };
    case GET_BLOGS_SUCCESS:
      return { loading: false, Blogs: action.payload };
    case GET_BLOGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getBogDetails = (state = {}, action) => {
  switch (action.type) {
    case GET_BLOG_DETAIL_REQUEST:
      return { loading: true, BlogDetail: [] };
    case GET_BLOG_DETAIL_SUCCESS:
      return { loading: false, BlogDetail: action.payload };
    case GET_BLOG_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BLOG_REQUEST:
      return { loading: true, UpdatedBlog: [] };
    case UPDATE_BLOG_SUCCESS:
      return { loading: false, UpdatedBlog: action.payload };
    case UPDATE_BLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BLOG_REQUEST:
      return { loading: true, DeletedBlog: [] };
    case DELETE_BLOG_SUCCESS:
      return { loading: false, DeletedBlog: action.payload };
    case DELETE_BLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const likeBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case LIKED:
      localStorage.setItem("like", JSON.stringify(action.payload));
      return { likes: action.payload };
    default:
      return state;
  }
};
