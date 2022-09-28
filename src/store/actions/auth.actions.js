import axios from "axios";
import config from "../../config/config";

const logIn = (user) => {
  debugger;
  return (dispatch) => {
    axios
      .post(config.loginUrl, {
        email: user.email,
        password: user.password
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR_FINDING_USER"
        });
      });
  };
};

const getUserList = (access_token) => {
  return (dispatch) => {
    axios
      .get(config.getUsersUrl, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${access_token}`
        }
      })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_USER_LIST",
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR_FINDING_USER"
        });
      });
  };
};

export const authActions = {
  logIn,
  getUserList
};
