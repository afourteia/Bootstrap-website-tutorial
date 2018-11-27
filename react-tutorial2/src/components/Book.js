import React, { Component } from "react";

export default class Book extends Component {
    render() {
        const { img, title, author } = this.props.info;
        return (
            <div className="book">
                <img src={img} alt="book" width="300px" />
                <div>
                    <h4>Title: {title}</h4>
                    <h6>By {author}</h6>
                </div>
            </div>
        );
    }
}
