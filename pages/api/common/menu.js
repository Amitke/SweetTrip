import {
  getHeaderMenuRequest,
  getHeaderMenuSuccess,
  getHeaderMenuFailure,
  getFooterMenuRequest,
  getFooterMenuSuccess,
  getFooterMenuFailure,
} from "@/redux/actions/menu";

export const getHeaderMenu = () => {
  return async (dispatch) => {
    dispatch(getHeaderMenuRequest());
    try {
      const response = await fetch("./../../../staticJson/headerMenu.json"); // Path to your JSON file
      if (response.status === 200) {
        const promiseData = response.json();
        promiseData.then((result) => {
          dispatch(getHeaderMenuSuccess(result));
        });
      } else {
        dispatch(getHeaderMenuFailure("Data is not found"));
      }
    } catch (error) {
      dispatch(getHeaderMenuFailure(error.toString()));
    }
  };
};

export const getFooterMenu = () => {
  return async (dispatch) => {
    dispatch(getFooterMenuRequest());
    try {
      const response = await fetch("./../../../staticJson/footerMenu.json"); // Path to your JSON file
      if (response.status === 200) {
        const promiseData = response.json();
        promiseData.then((result) => {
          dispatch(getFooterMenuSuccess(result));
        });
      } else {
        dispatch(getFooterMenuFailure("Data is not found"));
      }
    } catch (error) {
      dispatch(getFooterMenuFailure(error.toString()));
    }
  };
};
