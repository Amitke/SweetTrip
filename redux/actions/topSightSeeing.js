import {
  GET_TOP_SIGHT_SEEING_REQUEST,
  GET_TOP_SIGHT_SEEING_SUCCESS,
  GET_TOP_SIGHT_SEEING_FAILURE,
} from "../constants/topSightSeeing";

export const getTopSightSeeingRequest = () => ({
  type: GET_TOP_SIGHT_SEEING_REQUEST,
});

export const getTopSightSeeingSuccess = (topSightSeeing) =>({
    type:GET_TOP_SIGHT_SEEING_SUCCESS,
    payload: topSightSeeing,
})

export const getTopSightSeeingFailure = (topSightSeeing)=>({
    type:GET_TOP_SIGHT_SEEING_FAILURE,
    payload:topSightSeeing,
})