import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Index = () => (
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);

ReactDOM.render(<Index />, document.getElementById("index"));

registerServiceWorker();
