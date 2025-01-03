import {
  GET_CONTACT_DATA_REQUEST,
  GET_CONTACT_DATA_SUCCESS,
  GET_CONTACT_DATA_FAILURE,
} from "../constants/contact";

export const getContactDataRequest = () => ({
  type: GET_CONTACT_DATA_REQUEST,
});

export const getContactDataSuccess = (contactInfo) =>({
    type:GET_CONTACT_DATA_SUCCESS,
    payload: contactInfo,
})

export const getContactDataFailure = (contactInfo)=>({
    type:GET_CONTACT_DATA_FAILURE,
    payload:contactInfo,
})