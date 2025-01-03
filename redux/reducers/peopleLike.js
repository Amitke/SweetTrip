import {
  GET_PEOPLE_LIKE_REQUEST,
  GET_PEOPLE_LIKE_SUCCESS,
  GET_PEOPLE_LIKE_FAILURE,
} from "../constants/peopleLike";

const initialState = {
  status: false,
  peopleLike: null,
  error: "",
};

const peopleLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_LIKE_REQUEST:
      return {
        ...state,
        status: false,
        peopleLike: null,
        error: "",
      };
    case GET_PEOPLE_LIKE_SUCCESS:
      return {
        ...state,
        status: true,
        peopleLike: action.payload,
        error: "",
      };
    case GET_PEOPLE_LIKE_FAILURE:
      return {
        ...state,
        status: false,
        peopleLike: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default peopleLikeReducer;
