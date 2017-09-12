import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CommentApp from "./components/commentApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
ß
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById("root")
);
