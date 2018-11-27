import React from "react";
import ReactDom from "react-dom";

// Use JXS sytax
function Greeting() {
    return (
        <div>
            <h1>hello from React</h1>
            <p>
                lorem7
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                </ul>
            </p>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => <h1>Abdul Fourteia</h1>;
const Message = () => <p>This is my message</p>;

// function Greeting() {
//   return React.createElement("div", {}, "hello world");
// }

ReactDom.render(<Greeting />, document.getElementById("root"));
