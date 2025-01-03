import {
  GET_FAQ_REQUEST,
  GET_FAQ_SUCCESS,
  GET_FAQ_FAILURE,
} from "../constants/faq";

export const getFaqRequest = () => ({
  type: GET_FAQ_REQUEST,
});

export const getFaqSuccess = (faq) =>({
    type:GET_FAQ_SUCCESS,
    payload: faq,
})

export const getFaqFailure = (faq)=>({
    type:GET_FAQ_FAILURE,
    payload:faq,
})