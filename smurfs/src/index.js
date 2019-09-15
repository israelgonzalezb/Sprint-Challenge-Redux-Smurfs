import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedSmurfsList } from "./components/App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
      <ConnectedSmurfsList />
  </Provider>,
  document.getElementById("root")
);
