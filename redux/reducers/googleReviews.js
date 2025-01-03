import {
  GET_GOOGLE_REVIEW_REQUEST,
  GET_GOOGLE_REVIEW_SUCCESS,
  GET_GOOGLE_REVIEW_FAILURE,
} from "../constants/googleReviews";

const initialState = {
  status: false,
  googleReviews: null,
  error: "",
};

const googleReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOOGLE_REVIEW_REQUEST:
      return {
        ...state,
        status: false,
        googleReviews: null,
        error: "",
      };
    case GET_GOOGLE_REVIEW_SUCCESS:
      return {
        ...state,
        status: true,
        googleReviews: action.payload,
        error: "",
      };
    case GET_GOOGLE_REVIEW_FAILURE:
      return {
        ...state,
        status: false,
        googleReviews: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default googleReviewsReducer;
