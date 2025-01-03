import {
  GET_ROUTES_REQUEST,
  GET_ROUTES_SUCCESS,
  GET_ROUTES_FAILURE,
} from "../constants/popularRoutes";

export const getPopularRoutesRequest = () => ({
  type: GET_ROUTES_REQUEST,
});

export const getPopularRoutesSuccess = (popularRoutes) =>({
    type:GET_ROUTES_SUCCESS,
    payload: popularRoutes,
})

export const getPopularRoutesFailure = (popularRoutes)=>({
    type:GET_ROUTES_FAILURE,
    payload:popularRoutes,
})