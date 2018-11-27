import React from "react";
import ReactDom from "react-dom";

// Import CSS
import "./index.css";

// Use JXS sytax
function Greeting() {
    return (
        <div>
            <h1>hello from React</h1>
            <p>lorem7</p>
            <ul>
                <li>
                    <a href="#">home</a>
                </li>
            </ul>
            <section className="book">
                <Person />
                <Message />
                <CoverImage />
                <Title />
                <Author />
            </section>
        </div>
    );
}

const Person = () => <h1>Abdul Fourteia</h1>;
const Message = () => (
    <p style={{ backgroundColor: "white" }}>This is my message</p>
);

const CoverImage = () => (
    <img
        width="200"
        src="https://images-na.ssl-images-amazon.com/images/I/51r9XYcHP+L._AA218_.jpg"
        alt="book cover"
    />
);

const Title = () => <h1>The subtle of something something</h1>;

const Author = () => <p> By someone</p>;
// function Greeting() {
//   return React.createElement("div", {}, "hello world");
// }

ReactDom.render(<Greeting />, document.getElementById("root"));
