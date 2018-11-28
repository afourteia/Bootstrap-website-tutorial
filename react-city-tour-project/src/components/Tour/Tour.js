import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container">
                    <img
                        src="https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                    />
                    <span className="close-btn">
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h4>name</h4>
                    <h5>
                        info <span className="fas fa-caret-square-down" />
                    </h5>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rem beatae tempora unde nemo omnis. Magni tenetur
                        nulla praesentium accusamus optio debitis aliquam nemo
                        iure.
                    </p>
                </div>
            </article>
        );
    }
}
