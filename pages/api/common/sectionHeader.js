import {
    getSectionHeaderRequest,
    getSectionHeaderSuccess,
    getSectionHeaderFailure,
} from "@/redux/actions/sectionHeader";

export const getSectionHeaderData = () =>{
    return async(dispatch)=>{
        dispatch(getSectionHeaderRequest())
        try{
            const response = await fetch("./../../../staticJson/sectionHeader.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getSectionHeaderSuccess(result))
                })
            }
            else{
                dispatch(getSectionHeaderFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getSectionHeaderFailure(error.toString()));
        }
    }
}
