import { Component } from "react";
import '../css/score.css';
import Button from './button';

class score extends Component {
    state = {
        msg: "MIN"
    }
    constructor(props) {
        super(props);
        this.num = 0;
        this.current = "";
    }
    vote = () => {
        if (this.num <= 10) {
            this.num += 1;
            this.setState({ msg: this.num });
        }
        if (this.num >= 10) {
            this.setState({ msg: "MAX" });

        }
        if (this.num > 10) {
            this.max();
        }

    }
    unvote = () => {
        if (this.num > 0) {
            this.num -= 1;
            this.setState({ msg: this.num });
        }
        if (this.num === 0) {
            this.setState({ msg: "MIN" });
        }
    }
    min = () => {
        window.alert("Cannot unvote")
    }
    max = () => {
        window.alert("Cannot Vote more")
    }
    render() {
        const { msg } = this.state;
        return (
            <div className="vote">
                <Button
                    action="Click to Vote"
                    parentCallback={this.vote}
                />
                <h2>{msg}</h2>
                <Button
                    action="Click to Unvote"
                    parentCallback={this.unvote}
                />
            </div>
        );
    }
}

export default score;