import {
  GET_GOOGLE_REVIEW_REQUEST,
  GET_GOOGLE_REVIEW_SUCCESS,
  GET_GOOGLE_REVIEW_FAILURE,
} from "../constants/googleReviews";

export const getGoogleReviewsRequest = () => ({
  type: GET_GOOGLE_REVIEW_REQUEST,
});

export const getGoogleReviewsSuccess = (googleReviews) =>({
    type:GET_GOOGLE_REVIEW_SUCCESS,
    payload: googleReviews,
})

export const getGoogleReviewsFailure = (googleReviews)=>({
    type:GET_GOOGLE_REVIEW_FAILURE,
    payload:googleReviews,
})