import React from 'react'


class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <React.Fragment>
            <h2>Heading</h2>
            <h3>Sub Heading</h3>
            <h1>Hello, {this.props.name}</h1>;
        </React.Fragment>
    }
}