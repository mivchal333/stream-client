import React, {Component} from 'react';
import StreamForm from "./StreamForm";
import {connect} from "react-redux";
import {createStream} from "../../actions";

class StreamCreate extends Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </>
        )
    }
}

export default connect(null, {createStream})(StreamCreate)