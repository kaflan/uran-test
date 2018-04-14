import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';

const appId = 2002265576700045;
// const clientSecret = "54f0549c828323eff3523768042b1736";

export default class Example extends Component {


    handleResponse = (data) => {
        console.log(data);
    };

    handleError = (error) => {
        this.setState({ error });
    };

    render() {
        return (
            <FacebookProvider appId={appId}>
                <Login
                    scope="email"
                    onResponse={this.handleResponse}
                    onError={this.handleError}
                >
                    <span>Login via Facebook</span>
                </Login>
            </FacebookProvider>
        );
    }
}
