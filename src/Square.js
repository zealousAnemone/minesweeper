
import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mine: this.props.mine };
    }

    render() {
        return (
            <div className="square"></div>
        );
    }
}

export default Square;