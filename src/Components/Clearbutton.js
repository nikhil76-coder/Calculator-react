import React, { Component } from "react";
import "./Clearbutton.css";

class ClearButton extends Component {
    render() {
        return (

            <div>
                <div
                    className="clear-btn"
                    onClick={() => this.props.handleClear()}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ClearButton;