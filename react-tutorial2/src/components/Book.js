import React, { Component } from "react";

export default class Book extends Component {
    render() {
        const { book, author } = this.props.info;
        return (
            <div>
                <h3>Book: {book}</h3>
                <h5>Author: {author}</h5>
            </div>
        );
    }
}
