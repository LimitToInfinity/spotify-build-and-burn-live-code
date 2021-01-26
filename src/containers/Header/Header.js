import SpotifyLogo from '../../assets/images/spotify-logo.png';

import './Header.css';

import SearchContainer from '../SearchContainer/SearchContainer';

const Header = () => {

  return (
    <header>
      <img
        id="logo"
        src={ SpotifyLogo }
        alt="Spotify Logo"
      />
      <SearchContainer />
    </header>
  )
}

export default Header;