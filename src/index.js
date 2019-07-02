import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import commonReducer from "./store/reducers/common";
import layoutReducer from "./store/reducers/layout";
import meReducer from "./store/reducers/me";
import experienceReducer from "./store/reducers/experience";
import contactReducer from "./store/reducers/contact";
import detailedCardReducer from "./store/reducers/detailedCard";

const composeEnhancers =
  process.env.NODE_ENV == "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
  common: commonReducer,
  layout: layoutReducer,
  me: meReducer,
  experience: experienceReducer,
  contact: contactReducer,
  detailedCard: detailedCardReducer
});

// const store = createStore(reducer, applyMiddleware(logger, xxx , ...)); al igual que en express
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
