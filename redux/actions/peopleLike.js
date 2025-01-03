import {
  GET_PEOPLE_LIKE_REQUEST,
  GET_PEOPLE_LIKE_SUCCESS,
  GET_PEOPLE_LIKE_FAILURE,
} from "../constants/peopleLike";

export const getPeopleLikeRequest = () => ({
  type: GET_PEOPLE_LIKE_REQUEST,
});

export const getPeopleLikeSuccess = (peopleLike) =>({
    type:GET_PEOPLE_LIKE_SUCCESS,
    payload: peopleLike,
})

export const getPeopleLikeFailure = (peopleLike)=>({
    type:GET_PEOPLE_LIKE_FAILURE,
    payload:peopleLike,
})