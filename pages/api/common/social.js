import {
  getSocialDataRequest,
  getSocialDataSuccess,
  getSocialDataFailure,
} from "@/redux/actions/social";

export const getSocialIcon = () => {
  return async (dispatch) => {
    dispatch(getSocialDataRequest());
    try {
      const response = await fetch("./../../../staticJson/social.json"); // Path to your JSON file
      if (response.status === 200) {
        const promiseData = response.json();
        promiseData.then((result) => {
          dispatch(getSocialDataSuccess(result));
        });
      } else {
        dispatch(getSocialDataFailure("Data is not found"));
      }
    } catch (error) {
      dispatch(getSocialDataFailure(error.toString()));
    }
  };
};
