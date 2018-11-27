import React, { Component } from "react";
import "./App.css";
import Booklist1 from "./components/Booklist";

class App extends Component {
    render() {
        return (
            <div>
                hello from app
                <Booklist1 />
            </div>
        );
    }
}

export default App;
