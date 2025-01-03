import {
  GET_RENTAL_VEHICLE_REQUEST,
  GET_RENTAL_VEHICLE_SUCCESS,
  GET_RENTAL_VEHICLE_FAILURE,
} from "../constants/rentalVehicle";

export const getRentalVehicleRequest = () => ({
  type: GET_RENTAL_VEHICLE_REQUEST,
});

export const getRentalVehicleSuccess = (rentalVehicle) =>({
    type:GET_RENTAL_VEHICLE_SUCCESS,
    payload: rentalVehicle,
})

export const getRentalVehicleFailure = (rentalVehicle)=>({
    type:GET_RENTAL_VEHICLE_FAILURE,
    payload:rentalVehicle,
})