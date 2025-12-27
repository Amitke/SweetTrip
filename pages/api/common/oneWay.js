import {
  getOneWayDataRequest,
  getOneWayDataSuccess,
  getOneWayDataFailure,
} from "@/redux/actions/oneWay";

export const getOneWayData = () => {
  return async (dispatch) => {
    dispatch(getOneWayDataRequest());
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyKGtASze0Qh8dGc4rM8Ch4UCYZ4h3OFIxbd63BDtUu8TfmVVKa_E8oPTyc7s2Oi96MMA/exec"); // Path to your JSON file
      if (response.status === 200) {
        const promiseData = response.json();
        promiseData.then((result) => {
          dispatch(getOneWayDataSuccess(result));
        });
      } else {
        dispatch(getOneWayDataFailure("Data is not found"));
      }
    } catch (error) {
      dispatch(getOneWayDataFailure(error.toString()));
    }
  };
};
