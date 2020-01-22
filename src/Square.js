
import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mine: this.props.mine, clicked: false };
        this.checkMine = this.checkMine.bind(this);
    }

    checkMine(e) {
        e.preventDefault();
        this.setState({ clicked: true });
        if (e.target.id === '*') {
            console.log("BOOM");
        } else {
            console.log("SAFE");
        }
    }

    render() {
        return (
            <div className={this.state.clicked ? "clicked" : "square"} onClick={this.checkMine} id={this.state.mine}></div>
        );
    }
}
export default Square;