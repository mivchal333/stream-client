import React from 'react';
import {fetchStreams} from "../../actions";
import {connect} from "react-redux";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default connect(null, {fetchStreams})(StreamList);