import React, { Component } from "react";

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render() {
        const { id, img, title, author } = this.props.info;
        const { deleteItem } = this.props;
        return (
            <div className="book">
                <img src={img} alt="book" width="300px" />
                <div>
                    <h4>Title: {title}</h4>
                    <h6>By {author}</h6>
                    <button onClick={() => deleteItem(id)}>Delete item</button>
                </div>
            </div>
        );
    }
}
