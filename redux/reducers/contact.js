import {
  GET_CONTACT_DATA_REQUEST,
  GET_CONTACT_DATA_SUCCESS,
  GET_CONTACT_DATA_FAILURE,
} from "../constants/contact";

const initialState = {
  status: false,
  contactInfo: null,
  error: "",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_DATA_REQUEST:
      return {
        ...state,
        status: false,
        contactInfo: null,
        error: "",
      };
    case GET_CONTACT_DATA_SUCCESS:
      return {
        ...state,
        status: true,
        contactInfo: action.payload,
        error: "",
      };
    case GET_CONTACT_DATA_FAILURE:
      return {
        ...state,
        status: false,
        contactInfo: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default contactReducer;
