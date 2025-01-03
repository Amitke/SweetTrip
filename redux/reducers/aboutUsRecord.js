import {
  GET_ABOUT_US_RECORD_REQUEST,
  GET_ABOUT_US_RECORD_SUCCESS,
  GET_ABOUT_US_RECORD_FAILURE,
} from "../constants/aboutUsRecord";

const initialState = {
  status: false,
  aboutUsRecord: null,
  error: "",
};

const aboutUsRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT_US_RECORD_REQUEST:
      return {
        ...state,
        status: false,
        aboutUsRecord: null,
        error: "",
      };
    case GET_ABOUT_US_RECORD_SUCCESS:
      return {
        ...state,
        status: true,
        aboutUsRecord: action.payload,
        error: "",
      };
    case GET_ABOUT_US_RECORD_FAILURE:
      return {
        ...state,
        status: false,
        aboutUsRecord: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default aboutUsRecordReducer;
