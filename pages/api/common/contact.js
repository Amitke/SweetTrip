import {
  getContactDataRequest,
  getContactDataSuccess,
  getContactDataFailure,
} from "@/redux/actions/contact";

export const getContactData = () =>{
    return async(dispatch)=>{
        dispatch(getContactDataRequest())
        try{
            const response = await fetch("./../../../staticJson/contact.json"); // Path to your JSON file
            if(response.status===200){
                const promiseData = response.json()
                promiseData.then((result)=>{
                    dispatch(getContactDataSuccess(result))
                })
            }
            else{
                dispatch(getContactDataFailure("Data is not found"));
            }
        }
        catch(error){
            dispatch(getContactDataFailure(error.toString()));
        }
    }
}
