import React from "react";
import { connect } from "react-redux";

class ComponentThree extends React.Component {
    render() {
        let counter = this.props.counter;
        let text = this.props.text.value;
        return (
            <div className="ComponentThree">
                <h5>3. Class Component</h5>
                <p>Counter: {counter}</p>
                <p>Text: {text} </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const counter = state.wellcomeStore.mInput;
    const text = state.wellcomeStore.mInput;
    return {
        counter,
        text
    };
}

export default connect(mapStateToProps)(ComponentThree);