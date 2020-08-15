import React from "react";
import { render } from "react-dom";
import App from "./App";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import { Provider } from "react-redux";

const reduxMiddleware = (store) => (next) => (action) => {
  console.log(action, store.getState());

  if (store.getState().step === 1 && store.getState().count === 10) {
    return alert("10");
  }
  if (store.getState().step === 10 && store.getState().count === 100) {
    alert("100");
  }
  if (store.getState().step === 50 && store.getState().count === 200) {
    alert("200");
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(reduxMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
