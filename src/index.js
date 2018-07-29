import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import beautyReducer from "./reducers";
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = applyMiddleware(thunk)
const store = createStore(beautyReducer, composeWithDevTools(middleware));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
