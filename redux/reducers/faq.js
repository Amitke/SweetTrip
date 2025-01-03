import {
  GET_FAQ_REQUEST,
  GET_FAQ_SUCCESS,
  GET_FAQ_FAILURE,
} from "../constants/faq";

const initialState = {
  status: false,
  faq: null,
  error: "",
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAQ_REQUEST:
      return {
        ...state,
        status: false,
        faq: null,
        error: "",
      };
    case GET_FAQ_SUCCESS:
      return {
        ...state,
        status: true,
        faq: action.payload,
        error: "",
      };
    case GET_FAQ_FAILURE:
      return {
        ...state,
        status: false,
        faq: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default faqReducer;
