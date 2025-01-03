import { GET_HEADER_MENU_REQUEST, GET_HEADER_MENU_SUCCUSS, GET_HEADER_MENU_FAILURE} from "../../constants/menu";

const initialState = {
  status: false,
  menuItem: null,
  error: "",
};
export const headerMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HEADER_MENU_REQUEST:
      return {
        ...state,
        status: false,
        menuItem:null,
        error:''
      };
    case GET_HEADER_MENU_SUCCUSS:
      return {
        ...state,
        status: true,
        menuItem: action.payload,
        error: '',
      };
    case GET_HEADER_MENU_FAILURE:
        return{
            ...state,
            status: false,
            menuItem: null,
            error: action.payload
        }
    default:
      return state;
  }
};
export default headerMenuReducer;
