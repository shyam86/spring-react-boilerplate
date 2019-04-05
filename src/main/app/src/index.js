import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";
import { authenticated } from "./data/modules/auth";

import App from "./App";
import setAuthToken from "./token/token";
import jwt_decode from "jwt-decode";
import * as Names from "./constants/names";

import "bootstrap/dist/css/bootstrap.min.css";
import "sanitize.css/sanitize.css";
import "./index.css";

const target = document.querySelector("#root");

// Check for token to keep user logged in

if (localStorage.getItem(Names.JWT_TOKEN)) {
  // Set auth token header auth
  const token = localStorage.getItem(Names.JWT_TOKEN);
  console.log(token);

  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  console.log(decoded);

  store.dispatch(
    authenticated({
      signedIn: true,
      username: decoded.username,
      roles: decoded.roles,
      authFailure: false
    })
  );
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
