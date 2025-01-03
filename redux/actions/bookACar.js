import {
    GET_BOOK_DATA_REQUEST,
    GET_BOOK_DATA_SUCCESS,
    GET_BOOK_DATA_FAILURE,
  } from "../constants/bookACar";

  export const getBookDataRequest = () => ({
    type: GET_BOOK_DATA_REQUEST,
  });
  
  export const getBookDataSuccess = (bookData) =>({
      type:GET_BOOK_DATA_SUCCESS,
      payload: bookData,
  })
  
  export const getBookDataFailure = (bookData)=>({
      type:GET_BOOK_DATA_FAILURE,
      payload:bookData,
  })