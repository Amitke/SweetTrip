import {
  GET_BOOK_DATA_REQUEST,
  GET_BOOK_DATA_SUCCESS,
  GET_BOOK_DATA_FAILURE,
} from "../constants/bookACar";

const initialState = {
  status: null,
  bookData: null,
  error: null,
};

const bookDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_DATA_REQUEST:
      return {
        ...state,
        status: null,
        bookData: action.payload,
        error: null,
      };
    case GET_BOOK_DATA_SUCCESS:
      return {
        ...state,
        status: true,
        bookData: action.payload,
        error: null,
      };
    case GET_BOOK_DATA_FAILURE:
      return {
        ...state,
        status: false,
        bookData: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
export default bookDataReducer;
