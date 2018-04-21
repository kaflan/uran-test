import React, { Component} from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import "./login.css";
import {signIn} from "../../ducks/auth";
class Auth extends Component {
    handleResponse = (data) => {
        const profile = {
            email: data.email,
            name: data.name,
            userID: data.userID,
            accessToken: data.accessToken,
            picture: data.picture.url

        };
        // const {profile, tokenDetail} = data;
        this.props.signIn(profile);
    };


    render() {
        const appId = 2002265576700045;
        return (
            <div className="login-button">
                <FacebookLogin
                    appId={appId}
                    autoLoad={true}
                    fields="name,email,picture, id"
                    scope="public_profile"
                    callback={this.handleResponse}
                />
            </div>

        );
    }
}

export default connect(null,{signIn})(Auth);