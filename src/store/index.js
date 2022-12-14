import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (initialState) => {
  const middleware = compose(applyMiddleware(thunk));

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );
};

const store = configureStore({});

export default store;
