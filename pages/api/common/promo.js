import {
    getPromoRequest,
    getPromoSuccess,
    getPromoFailure,
} from "@/redux/actions/promo";

export const getPromoData = () =>{
    return async(dispatch)=>{
        dispatch(getPromoRequest())
        try{
            const response = await fetch("./../../../staticJson/promo.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getPromoSuccess(result))
                })
            }
            else{
                dispatch(getPromoFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getPromoFailure(error.toString()));
        }
    }
}
