import {
  GET_SECTION_HEADER_REQUEST,
  GET_SECTION_HEADER_SUCCESS,
  GET_SECTION_HEADER_FAILURE,
} from "../constants/sectionHeader";

export const getSectionHeaderRequest = () => ({
  type: GET_SECTION_HEADER_REQUEST,
});

export const getSectionHeaderSuccess = (sectionHeader) =>({
    type:GET_SECTION_HEADER_SUCCESS,
    payload: sectionHeader,
})

export const getSectionHeaderFailure = (sectionHeader)=>({
    type:GET_SECTION_HEADER_FAILURE,
    payload:sectionHeader,
})