import {
  GET_PROMO_REQUEST,
  GET_PROMO_SUCCESS,
  GET_PROMO_FAILURE,
} from "../constants/promo";

const initialState = {
  status: false,
  promo: null,
  error: "",
};

const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROMO_REQUEST:
      return {
        ...state,
        status: false,
        promo: null,
        error: "",
      };
    case GET_PROMO_SUCCESS:
      return {
        ...state,
        status: true,
        promo: action.payload,
        error: "",
      };
    case GET_PROMO_FAILURE:
      return {
        ...state,
        status: false,
        promo: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default promoReducer;
