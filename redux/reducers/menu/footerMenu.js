import { GET_FOOTER_MENU_REQUEST,GET_FOOTER_MENU_SUCCUSS,GET_FOOTER_MENU_FAILURE } from "../../constants/menu";

const initialState = {
  status: false,
  menuItem: null,
  error: "",
};
export const footerMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOTER_MENU_REQUEST:
      return {
        ...state,
        status: false,
        menuItem:null,
        error:''
      };
    case GET_FOOTER_MENU_SUCCUSS:
      return {
        ...state,
        status: true,
        menuItem: action.payload,
        error: '',
      };
    case GET_FOOTER_MENU_FAILURE:
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
export default footerMenuReducer;
