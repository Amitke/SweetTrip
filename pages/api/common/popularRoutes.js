import {
    getPopularRoutesRequest,
    getPopularRoutesSuccess,
    getPopularRoutesFailure,
} from "@/redux/actions/popularRoutes";

export const getPopularRoutesData = () =>{
    return async(dispatch)=>{
        dispatch(getPopularRoutesRequest())
        try{
            const response = await fetch("./../../../staticJson/popularRoutes.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getPopularRoutesSuccess(result))
                })
            }
            else{
                dispatch(getPopularRoutesFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getPopularRoutesFailure(error.toString()));
        }
    }
}
