import {
  GET_TOP_SIGHT_SEEING_REQUEST,
  GET_TOP_SIGHT_SEEING_SUCCESS,
  GET_TOP_SIGHT_SEEING_FAILURE,
} from "../constants/topSightSeeing";

const initialState = {
  status: false,
  topSightSeeing: null,
  error: "",
};

const topSightSeeingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_SIGHT_SEEING_REQUEST:
      return {
        ...state,
        status: false,
        topSightSeeing: null,
        error: "",
      };
    case GET_TOP_SIGHT_SEEING_SUCCESS:
      return {
        ...state,
        status: true,
        topSightSeeing: action.payload,
        error: "",
      };
    case GET_TOP_SIGHT_SEEING_FAILURE:
      return {
        ...state,
        status: false,
        topSightSeeing: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default topSightSeeingReducer;
