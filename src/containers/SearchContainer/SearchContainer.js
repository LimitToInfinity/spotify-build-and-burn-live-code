import { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from 'material-ui-search-bar';

import {
  parseJSON,
  authFetch
} from '../../helpers/utilities';

import './SearchContainer.css';

let searchURL = 'https://api.spotify.com/v1/search';

class SearchContainer extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (value) => {
    this.setState({ searchTerm: value });
  }

  handleSearch = () => {
    const { searchTerm } = this.state;

    const headers = {
      Authorization: `Bearer ${localStorage.spotify_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

    searchURL = `${searchURL}?q=${searchTerm}&type=artist`
    
    authFetch(searchURL,
      'GET',
      headers
    ).then(parseJSON)
      .then(console.log);
  }

  render() {
    return (
      <SearchBar
        className="search-bar"
        name="searchTerm"
        value={ this.state.searchTerm }
        placeholder="Search by artist"
        closeIcon={ <SearchIcon /> }
        onChange={ this.handleChange }
        onCancelSearch={ this.handleSearch }
        onRequestSearch={ this.handleSearch }
      />
    );
  }
}

export default SearchContainer;