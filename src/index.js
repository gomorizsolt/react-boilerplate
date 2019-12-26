import React from "react";
import ReactDOM from "react-dom";
import Foo from "./components/Foo/Foo";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Foo name="__bar__" />, document.getElementById("index"));

registerServiceWorker();
