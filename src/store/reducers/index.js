import { combineReducers } from "redux";
import authReducer from "./auth.reducers";

// Root Reducer
const rootReducer = combineReducers({
  authReducer
});

export default rootReducer;
