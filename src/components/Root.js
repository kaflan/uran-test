import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Auth from "./Auth";
import Album from "./AlbumView/Album"
import PrivateRoute from "../Helpers/ProtecedRoute";

export default class Root extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Auth}/>
                <PrivateRoute path="/albums" component={Album} />
            </Switch>
        )
    }
}