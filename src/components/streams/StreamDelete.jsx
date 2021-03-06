import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {deleteStream, fetchStream} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }
        return "Are you sure you want to delete stream with title: " + this.props.stream.title
    }

    render() {
        const {id} = this.props.match.params;

        const onDismiss = () => history.push('/');

        const actions = <>
            <button className="ui negative button" onClick={() => this.props.deleteStream(id)}>Delete</button>
            <Link to="/" className="ui button">Cancel</Link>
        </>
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={actions}
                onDismiss={onDismiss}
            />
        );
    };
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})
export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete);