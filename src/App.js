import { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import {
  parseJSON,
  authFetch
} from './helpers/utilities';

import Header from './containers/Header/Header';
import PlaylistsContainer from './containers/PlaylistsContainer/PlaylistsContainer';
import ArtistContainer from './containers/ArtistContainer/ArtistContainer';

const featuredPlaylistsURL = 'https://api.spotify.com/v1/browse/featured-playlists';

class App extends Component {

  state = {
    playlists: []
  }

  componentDidMount() {
    this.getSpotifyToken();
  }

  getSpotifyToken = () => {
    const headers = {
      Authorization: `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    authFetch('https://accounts.spotify.com/api/token',
      'POST',
      headers,
      'grant_type=client_credentials'
    ).then(parseJSON)
      .then(this.handleAccessToken);
  }

  handleAccessToken = ({ access_token }) => {
    localStorage.setItem('spotify_token', access_token);
    this.getFeaturedPlaylists(access_token);
  }

  getFeaturedPlaylists = (spotify_token) => {
    const headers = {
      Authorization: `Bearer ${spotify_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    authFetch(featuredPlaylistsURL,
      'GET',
      headers
    ).then(parseJSON)
      .then(({ playlists: { items } }) => {
        this.setState({ playlists: items });
      })
  }
  
  render() {
    const { playlists } = this.state;

    return (
      <div className="App">
        <Route path="/" render={(routerProps) => {
          return <Header {...routerProps} />
        }} />
        <Route exact path="/" render={(_) => {
          return <PlaylistsContainer playlists={playlists} />
        }} />
        <Route path="/search" render={(routerProps) => {
          return <ArtistContainer {...routerProps} />
        }} />
      </div>
    );
  }
}

export default App;
