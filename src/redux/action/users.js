import axios from "axios";

const getAllusersRequest = () => {
  return { type: "GET_ALL_USERS_REQUEST" };
};
const getAllusersSuccess = (data) => {
  return { type: "GET_ALL_USERS_SUCCESS", payload: data };
};
const getAllusersFail = (err) => {
  return { type: "GET_ALL_USERS_FAIL", payload: err };
};

export const getAllusers = () => {
  return (dispatch) => {
    dispatch(getAllusersRequest());
    return axios
      .get("https://63a9301df4962215b58edc75.mockapi.io/Users")
      .then((res) => {
        dispatch(getAllusersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllusersFail(err.response.data));
      });
  };
};
