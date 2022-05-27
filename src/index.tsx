//general
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//store
import { store } from "./store/store";
//components
import App from "./components/App/App";
//styles
import "./styles/index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
