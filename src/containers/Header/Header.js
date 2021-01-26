import { Link } from 'react-router-dom';

import SpotifyLogo from '../../assets/images/spotify-logo.png';

import './Header.css';

import SearchContainer from '../SearchContainer/SearchContainer';

const Header = ({ history }) => {

  return (
    <header>
      <Link to="/">
        <img
          id="logo"
          src={ SpotifyLogo }
          alt="Spotify Logo"
        />
      </Link>
      <SearchContainer history={ history } />
    </header>
  )
}

export default Header;