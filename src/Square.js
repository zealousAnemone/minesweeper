
import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mine: this.props.mine };
        this.checkMine = this.checkMine.bind(this);
    }

    checkMine(e) {
        e.preventDefault();

        console.log("this works!");

    }
    render() {
        return (
            <div className="square" onClick={this.checkMine}></div>
        );
    }
}

export default Square;