import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import {moduleName as auth} from "./../ducks/auth";

class ProtectedRoute extends React.Component {
    render() {
        const {component, ...rest} = this.props;
        return <Route {...rest} render={this.renderProtected}/>
    }

    renderProtected = (routeProps) => {
        const {component: ProtectedComponent, authorized} = this.props;
        return authorized ? <ProtectedComponent {...routeProps}/> :
            <Redirect
            to={{
                pathname: "/"
            }}/>
    }
}


export default connect(state => ({
    authorized: !!state[auth].authorized
}), null, null, {pure: false})(ProtectedRoute);
