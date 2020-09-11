import React, {Component} from 'react';
import {connect} from "react-redux";
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '482893853854-u4eujp6201hu6m2k873g0ku0broha532.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn()
        }
        this.props.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn == null) {
            return null
        } else if (this.props.isSignedIn === true) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon"/>
                    Sign Out
                </button>)
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"/>
                    Sign In
                </button>
            )
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn
})
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);