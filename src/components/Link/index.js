import React from 'react';

export default class Link extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li>
                <h4><a href={this.props.href}>{this.props.name}</a></h4>
                <p>{this.props.description}</p>
            </li>
        )
    }

};