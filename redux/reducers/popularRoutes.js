import {
  GET_ROUTES_REQUEST,
  GET_ROUTES_SUCCESS,
  GET_ROUTES_FAILURE,
} from "../constants/popularRoutes";

const initialState = {
  status: false,
  popularRoutes: null,
  error: "",
};

const popularRoutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES_REQUEST:
      return {
        ...state,
        status: false,
        popularRoutes: null,
        error: "",
      };
    case GET_ROUTES_SUCCESS:
      return {
        ...state,
        status: true,
        popularRoutes: action.payload,
        error: "",
      };
    case GET_ROUTES_FAILURE:
      return {
        ...state,
        status: false,
        popularRoutes: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default popularRoutesReducer;
