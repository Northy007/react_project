import { Component } from "react";
import '../css/header_text.css';
class header_text extends Component {
    render() {
        return (
            <h1>{this.props.text}</h1>
        );
    }
}

export default header_text;