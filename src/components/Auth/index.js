import React, { Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';

import "./login.css";
import {signIn} from "../../ducks/auth";

class Auth extends Component {
    handleResponse = ({profile, tokenDetail}) => {
        // console.log(profile, tokenDetail);
        this.props.signIn(profile, tokenDetail);
    };

    handleError = (error) => {
        this.setState({ error });
    };

    render() {

        const appId = 2002265576700045;
        const size = "large";
        return (
            <div className="login-button">
                <FacebookProvider appId={appId} >
                    <Login
                        scope="email"
                        onResponse={this.handleResponse}
                        onError={this.handleError}
                    >
                        <Button  type="primary"  size={size}>
                            Login via Facebook <Icon type="facebook" />
                        </Button>
                    </Login>
                </FacebookProvider>
            </div>

        );
    }
}

export default connect(null,{signIn})(Auth);