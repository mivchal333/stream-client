import React from 'react';
import {fetchStreams} from "../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import '../../css/main.css'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }

    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <CSSTransition
                    key={stream.id} timeout={500}
                    classNames="fade"
                >
                    <div className="item" key={stream.id}>
                        {this.renderAdmin(stream)}
                        <i className="icon middle aligned icon camera"/>
                        <div className="content">
                            <Link to={'streams/show/' + stream.id}>
                                {stream.title}
                            </Link>
                            <div className="description">
                                {stream.description}
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: "right"}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <TransitionGroup className="ui celled list">
                    {this.renderList()}
                </TransitionGroup>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
})
export default connect(mapStateToProps, {fetchStreams})(StreamList);