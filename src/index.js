import React from "react";
import ReactDOM from "react-dom";
import Foo from "./components/Foo/Foo";
import registerServiceWorker from "./registerServiceWorker";

const Index = () => <Foo name="@developer" />;

ReactDOM.render(<Index />, document.getElementById("index"));

registerServiceWorker();
