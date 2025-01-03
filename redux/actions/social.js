import { GET_SOCIAL_REQUEST, GET_SOCIAL_SUCCUSS, GET_SOCIAL_FAILURE } from "../constants/social";

export const getSocialDataRequest = () => ({
  type: GET_SOCIAL_REQUEST
});

export const getSocialDataSuccess = (socialData) => ({
  type: GET_SOCIAL_SUCCUSS,
  payload: socialData,
});


export const getSocialDataFailure = (socialData) => ({
  type: GET_SOCIAL_FAILURE,
  payload: socialData,
});

