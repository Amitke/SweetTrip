import {
    getPeopleLikeRequest,
    getPeopleLikeSuccess,
    getPeopleLikeFailure,
} from "@/redux/actions/peopleLike";

export const getPeopleLikeData = () =>{
    return async(dispatch)=>{
        dispatch(getPeopleLikeRequest())
        try{
            const response = await fetch("./../../../../staticJson/peopleLike.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getPeopleLikeSuccess(result))
                })
            }
            else{
                dispatch(getPeopleLikeFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getPeopleLikeFailure(error.toString()));
        }
    }
}
