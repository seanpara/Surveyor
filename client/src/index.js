import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
// eslint-disable-next-line
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./components/App";
import reducers from "./reducers";
import axios from "axios";
window.axios = axios;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

//const survey = { title: "my title", subject: "my subject", body: "this is the body", recipients: "spara77@gmail.com" }
