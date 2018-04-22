import React from 'react';
import {connect} from 'react-redux';
import Navigation from "./NavigationMenu/Navigation";
import { Route, Switch } from "react-router-dom";
import {moduleName as auth} from "../../ducks/auth";
import {moduleName as albumsModule, getAlbums} from "../../ducks/albums";
import AlbumList from "./AlbumList";


class Album extends React.Component {
    componentDidMount() {
        const {userID, accessToken, getAlbums} = this.props;
        getAlbums(userID,accessToken);
    }
    render() {
        const {name, albums} = this.props;
        // console.log("___LOG___albums", albums.length);
        return <div>
            <Navigation/>
            <h1> Welcome, {name}.</h1>
            <Switch>
                <Route path="/albums" exact  render={() => <AlbumList albums={albums} /> }/>
                <Route path="/albums/:id" />
            </Switch>

        </div>;
    }
}

export default connect(state=>({
    name: state[auth].name,
    userID: state[auth].userID,
    accessToken: state[auth].accessToken,
    albums: state[albumsModule].albums
}), {getAlbums})(Album);