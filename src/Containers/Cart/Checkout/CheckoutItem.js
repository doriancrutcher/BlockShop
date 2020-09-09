import React, { Component } from 'react';

class MenuItem extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.name} - {this.props.price}
            </div>
        );
    }
}

export default MenuItem;