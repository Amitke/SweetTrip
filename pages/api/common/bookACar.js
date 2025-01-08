import {
  getBookDataRequest,
  getBookDataSuccess,
  getBookDataFailure,
} from "@/redux/actions/bookACar";

const url = "https://formspree.io/f/mzzzkndb";

export const postBookingDetails = (customerDetails) => {
  return async (dispatch) => {
    dispatch(getBookDataRequest());
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) dispatch(getBookDataSuccess(data));
        else dispatch(getBookDataFailure(data));
      })
      .catch((error) => {
        dispatch(getBookDataFailure(error));
      });
  };
};
