import { Component } from "react";
import '../css/button.css';
class button extends Component {
    onTrigger = () => {
        this.props.parentCallback("Voted");
    }
    render() {
        return (
            <button onClick={this.onTrigger}>{this.props.action}</button>
        );
    }
}

export default button;