import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <div>hello from React</div>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
