import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Store, persistor } from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { GOOGLE_CLIENT_ID } from "./config/Apis";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
  <PersistGate loading={null} persistor={persistor}>
      <App />
  </PersistGate>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();