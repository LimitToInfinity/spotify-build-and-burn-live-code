import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

import './PlaylistsContainer.css';

const PlaylistsContainer = ({ playlists }) => {
  
  const displayPlaylists = () => {
    return playlists.map(playlist => {
      return (
        <PlaylistCard
          key={playlist.id}
          playlist={playlist}
        />
      )
    })
  }

  return (
    <section className="playlists-container">
      { displayPlaylists() }
    </section>
  )
}

export default PlaylistsContainer;