import { Component } from "react";
import '../css/box.css';
import Score from './score';
class box extends Component {
    render() {
        return (
            <div className="body">
                <div className="info">
                    <div className="detail">
                        <h2>{this.props.type}</h2>
                        <h3>{this.props.food}</h3>
                        <p>{this.props.text}</p>
                    </div>
                    <img src={this.props.link} alt=""></img>
                </div>
                <div className="Score-bar">
                    <Score />
                </div>
            </div>
        );
    }
}

export default box;