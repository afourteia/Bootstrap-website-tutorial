import React, { Component } from "react";

export default class Book extends Component {
    constructor(props) {
        super(props);

        // You have to bind manually if you use regular functiosn instead of arrow functions
        // this.handleClick = this.handleClick.bind(this);

        this.state = {
            count: 0
        };
    }

    // Regular function
    // handleClick () {
    //     console.log("you clicked me");
    //     console.log(this.state.count);
    // };

    // Arrow function
    handleClick = () => {
        console.log("you clicked me");
        console.log(this.state.count);
    };

    render() {
        const { img, title, author } = this.props.info;
        return (
            <div className="book">
                <img src={img} alt="book" width="300px" />
                <div>
                    <h4>Title: {title}</h4>
                    <h6>By {author}</h6>
                    <button onClick={this.handleClick}>add Count</button>
                </div>
            </div>
        );
    }
}
