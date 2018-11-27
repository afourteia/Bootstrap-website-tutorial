import React from "react";
import ReactDom from "react-dom";

// Import CSS
// import "./index.css";

// Use JXS sytax
function People() {
    return (
        <section>
            <Person name="Abdul" job="Engineer" />
            <Person name="Susan" job="technician" />
            <Person name="Abdul" job="driver" />
        </section>
    );
}

const Person = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
        </div>
    );
};

ReactDom.render(<People />, document.getElementById("root"));
