import {
  GET_PROMO_REQUEST,
  GET_PROMO_SUCCESS,
  GET_PROMO_FAILURE,
} from "../constants/promo";

export const getPromoRequest = () => ({
  type: GET_PROMO_REQUEST,
});

export const getPromoSuccess = (promo) =>({
    type:  GET_PROMO_SUCCESS,
    payload: promo,
})

export const getPromoFailure = (promo)=>({
    type:GET_PROMO_FAILURE,
    payload:promo,
})