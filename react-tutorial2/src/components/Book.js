import React, { Component } from "react";

export default class Book extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            showInfo: true
        };
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };

    render() {
        const { id, img, title, author } = this.props.info;
        const { deleteItem } = this.props;
        return (
            <div className="book">
                <img src={img} alt="book" width="150px" />
                <div>
                    <h4>Title: {title}</h4>
                    <h6>By {author}</h6>
                    <button onClick={() => deleteItem(id)}>Delete item</button>
                    <button onClick={this.handleInfo}>Show Info</button>
                    {this.state.showInfo ? (
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Amet consectetur molestiae nostrum id placeat!
                        </p>
                    ) : null}
                </div>
            </div>
        );
    }
}
