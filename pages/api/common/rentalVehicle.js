import {
    getRentalVehicleRequest,
    getRentalVehicleSuccess,
    getRentalVehicleFailure,
} from "@/redux/actions/rentalVehicle";

export const getRentalVehicleData = () =>{
    return async(dispatch)=>{
        dispatch(getRentalVehicleRequest())
        try{
            const response = await fetch("./../../../staticJson/rentalVehicle.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getRentalVehicleSuccess(result))
                })
            }
            else{
                dispatch(getRentalVehicleFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getRentalVehicleFailure(error.toString()));
        }
    }
}
