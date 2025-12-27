import { GET_ONE_WAY_REQUEST, GET_ONE_WAY_SUCCUSS, GET_ONE_WAY_FAILURE } from "../constants/oneWay";

export const getOneWayDataRequest = () => ({
  type: GET_ONE_WAY_REQUEST
});

export const getOneWayDataSuccess = (oneWayData) => ({
  type: GET_ONE_WAY_SUCCUSS,
  payload: oneWayData,
});


export const getOneWayDataFailure = (oneWayData) => ({
  type: GET_ONE_WAY_FAILURE,
  payload: oneWayData,
});

