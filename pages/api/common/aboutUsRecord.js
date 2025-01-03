import {
    getAboutUsRecordRequest,
    getAboutUsRecordSuccess,
    getAboutUsRecordFailure,
} from "@/redux/actions/aboutUsRecord";

export const getAboutUsRecordData = () =>{
    return async(dispatch)=>{
        dispatch(getAboutUsRecordRequest())
        try{
            const response = await fetch("./../../../staticJson/aboutUsRecord.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getAboutUsRecordSuccess(result))
                })
            }
            else{
                dispatch(getAboutUsRecordFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getAboutUsRecordFailure(error.toString()));
        }
    }
}
