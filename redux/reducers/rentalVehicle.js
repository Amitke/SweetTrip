import {
  GET_RENTAL_VEHICLE_REQUEST,
  GET_RENTAL_VEHICLE_SUCCESS,
  GET_RENTAL_VEHICLE_FAILURE,
} from "../constants/rentalVehicle";

const initialState = {
  status: false,
  rentalVehicle: null,
  error: "",
};

const rentalVehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RENTAL_VEHICLE_REQUEST:
      return {
        ...state,
        status: false,
        rentalVehicle: null,
        error: "",
      };
    case GET_RENTAL_VEHICLE_SUCCESS:
      return {
        ...state,
        status: true,
        rentalVehicle: action.payload,
        error: "",
      };
    case GET_RENTAL_VEHICLE_FAILURE:
      return {
        ...state,
        status: false,
        rentalVehicle: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default rentalVehicleReducer;
