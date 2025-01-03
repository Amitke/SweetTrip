import {
    getFaqRequest,
    getFaqSuccess,
    getFaqFailure,
} from "@/redux/actions/faq";

export const getFaqData = () =>{
    return async(dispatch)=>{
        dispatch(getFaqRequest())
        try{
            const response = await fetch("./../../../staticJson/faq.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getFaqSuccess(result))
                })
            }
            else{
                dispatch(getFaqFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getFaqFailure(error.toString()));
        }
    }
}
