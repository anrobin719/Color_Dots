import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import AuthContextProvider from "./context/auth-context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
