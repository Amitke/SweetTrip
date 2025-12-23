import { GET_ONE_WAY_REQUEST, GET_ONE_WAY_SUCCUSS, GET_ONE_WAY_FAILURE } from "../constants/oneWay";

const initialState = {
  status: false,
  oneWayData: null,
  error: "",
};
export const oneWayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_WAY_REQUEST:
      return {
        ...state,
        status: false,
        oneWayData:null,
        error:''
      };
    case GET_ONE_WAY_SUCCUSS:
      return {
        ...state,
        status: true,
        oneWayData: action.payload,
        error: '',
      };
    case GET_ONE_WAY_FAILURE:
        return{
            ...state,
            status: false,
            oneWayData: null,
            error: action.payload
        }
    default:
      return state;
  }
};
export default oneWayReducer;
