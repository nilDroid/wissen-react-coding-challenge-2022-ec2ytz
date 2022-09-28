const initState = {
  authError: "",
  authToken: ""
};

const authReducer = (state = initState, action) => {
  console.log("reducer:", action.payload);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, authToken: action.payload.token };
    case "LOGIN_ERROR":
      return { ...state, authError: action.error.message };
    case "LOGOUT_SUCCESS":
      return state;
    case "GET_USER_LIST":
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};

export default authReducer;
