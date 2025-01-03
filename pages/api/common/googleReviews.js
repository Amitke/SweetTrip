import {
    getGoogleReviewsRequest,
    getGoogleReviewsSuccess,
    getGoogleReviewsFailure,
} from "@/redux/actions/googleReviews";

export const getGoogleReviewsData = () =>{
    return async(dispatch)=>{
        dispatch(getGoogleReviewsRequest())
        try{
            const response = await fetch("./../../../staticJson/googleReviews.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getGoogleReviewsSuccess(result))
                })
            }
            else{
                dispatch(getGoogleReviewsFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getGoogleReviewsFailure(error.toString()));
        }
    }
}
