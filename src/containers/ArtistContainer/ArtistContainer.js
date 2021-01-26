import { Component } from 'react';

import './ArtistContainer.css';

import {
  parseJSON,
  authFetch
} from '../../helpers/utilities';

const artistURL = 'https://api.spotify.com/v1/artists';

class ArtistContainer extends Component {

  state = {
    tracks: []
  }

  componentDidMount() {
    const { artist } = this.props.location.state;
    const headers = {
      Authorization: `Bearer ${localStorage.spotify_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    authFetch(`${artistURL}/${artist.id}/top-tracks?market=US`,
      'GET',
      headers
    ).then(parseJSON)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    return (
      <section>
        <h1>Artist Container!</h1>
      </section>
    );
  }
}

export default ArtistContainer;