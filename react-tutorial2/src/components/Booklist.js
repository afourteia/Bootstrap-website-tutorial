import React, { Component } from "react";
import Book from "./Book";
export default class Booklist extends Component {
    state = {
        books: [
            { book: "the first book", author: "faisal mahmoud" },
            { book: "the second book", author: "damn man" },
            { book: "the third book", author: "yo boy!" },
            { book: "the fourth book", author: "Salam" }
        ]
    };
    render() {
        const example = this.state.books.map(item => <p>{item.book}</p>);
        console.log(example);
        return (
            <div>
                <h2>Hello from booklist</h2>
                {this.state.books.map((item, index) => (
                    <Book key={index} info={item} />
                ))}
            </div>
        );
    }
}
