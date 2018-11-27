import React from "react";
import ReactDom from "react-dom";

// Import CSS
// import "./index.css";

// Use JXS sytax
function Greeting() {
    const btn = "search button";
    const name = "john";
    const lastname = "four";

    return (
        <section>
            {/* Must be an expression */}
            <button>{btn}</button>
            <h2>{`${name} ${lastname}`}</h2>
            <p>{12 + 34}</p>
        </section>
    );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
