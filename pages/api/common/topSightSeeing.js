import {
    getTopSightSeeingRequest,
    getTopSightSeeingSuccess,
    getTopSightSeeingFailure,
} from "@/redux/actions/topSightSeeing";

export const getTopSightSeeingData = () =>{
    return async(dispatch)=>{
        dispatch(getTopSightSeeingRequest())
        try{
            const response = await fetch("./../../../staticJson/topSightSeeing.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getTopSightSeeingSuccess(result))
                })
            }
            else{
                dispatch(getTopSightSeeingFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getTopSightSeeingFailure(error.toString()));
        }
    }
}
