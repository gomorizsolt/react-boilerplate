import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

const Index = () => <App />;

ReactDOM.render(<Index />, document.getElementById("index"));

registerServiceWorker();
