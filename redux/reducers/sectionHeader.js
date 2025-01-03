import {
  GET_SECTION_HEADER_REQUEST,
  GET_SECTION_HEADER_SUCCESS,
  GET_SECTION_HEADER_FAILURE,
} from "../constants/sectionHeader";

const initialState = {
  status: false,
  sectionHeader: null,
  error: "",
};

const sectionHeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SECTION_HEADER_REQUEST:
      return {
        ...state,
        status: false,
        sectionHeader: null,
        error: "",
      };
    case GET_SECTION_HEADER_SUCCESS:
      return {
        ...state,
        status: true,
        sectionHeader: action.payload,
        error: "",
      };
    case GET_SECTION_HEADER_FAILURE:
      return {
        ...state,
        status: false,
        sectionHeader: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default sectionHeaderReducer;
