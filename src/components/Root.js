import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from "./Auth";

export default class Root extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Auth}/>
            </Switch>
        )
    }
}