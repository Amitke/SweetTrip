import { GET_SOCIAL_REQUEST, GET_SOCIAL_SUCCUSS, GET_SOCIAL_FAILURE } from "../constants/social";

const initialState = {
  status: false,
  socialData: null,
  error: "",
};
export const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOCIAL_REQUEST:
      return {
        ...state,
        status: false,
        socialData:null,
        error:''
      };
    case GET_SOCIAL_SUCCUSS:
      return {
        ...state,
        status: true,
        socialData: action.payload,
        error: '',
      };
    case GET_SOCIAL_FAILURE:
        return{
            ...state,
            status: false,
            socialData: null,
            error: action.payload
        }
    default:
      return state;
  }
};
export default socialReducer;
