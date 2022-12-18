import {
  CREATE_REVIEW_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_SUCCESS,
  GET_REVIEW_FAIL,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
} from "../constant/reviewConstant";

export const newReviewReducer = (state = { NewReview: [] }, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
      return { loading: true, NewReview: [] };
    case CREATE_REVIEW_SUCCESS:
      return { loading: false, NewReview: action.payload };
    case CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getReviewReducer = (state = { Reviews: [] }, action) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
      return { loading: true, Reviews: [] };
    case GET_REVIEW_SUCCESS:
      return { loading: false, Reviews: action.payload };
    case GET_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
