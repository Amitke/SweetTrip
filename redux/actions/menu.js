import { GET_HEADER_MENU_REQUEST, GET_HEADER_MENU_SUCCUSS, GET_HEADER_MENU_FAILURE,GET_FOOTER_MENU_REQUEST,GET_FOOTER_MENU_SUCCUSS,GET_FOOTER_MENU_FAILURE } from "../constants/menu";

export const getHeaderMenuRequest = () => ({
  type: GET_HEADER_MENU_REQUEST
});

export const getHeaderMenuSuccess = (headerMenu) => ({
  type: GET_HEADER_MENU_SUCCUSS,
  payload: headerMenu,
});


export const getHeaderMenuFailure = (headerMenu) => ({
  type: GET_HEADER_MENU_FAILURE,
  payload: headerMenu,
});

export const getFooterMenuRequest = () => ({
  type: GET_FOOTER_MENU_REQUEST
});

export const getFooterMenuSuccess = (FooterMenu) => ({
  type: GET_FOOTER_MENU_SUCCUSS,
  payload: FooterMenu,
});


export const getFooterMenuFailure = (FooterMenu) => ({
  type: GET_FOOTER_MENU_FAILURE,
  payload: FooterMenu,
});

