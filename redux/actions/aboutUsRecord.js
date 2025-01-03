import {
  GET_ABOUT_US_RECORD_REQUEST,
  GET_ABOUT_US_RECORD_SUCCESS,
  GET_ABOUT_US_RECORD_FAILURE,
} from "../constants/aboutUsRecord";

export const getAboutUsRecordRequest = () => ({
  type: GET_ABOUT_US_RECORD_REQUEST,
});

export const getAboutUsRecordSuccess = (aboutUsRecord) =>({
    type:GET_ABOUT_US_RECORD_SUCCESS,
    payload: aboutUsRecord,
})

export const getAboutUsRecordFailure = (aboutUsRecord)=>({
    type:GET_ABOUT_US_RECORD_FAILURE,
    payload:aboutUsRecord,
})