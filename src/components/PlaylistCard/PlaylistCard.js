import './PlaylistCard.css';

const PlaylistCard = ({ playlist }) => {

  return (
    <div className="playlist-card">
      <div className="playlist-details">
        <h2>{ playlist.name }</h2>
        <p dangerouslySetInnerHTML={{ __html: `${ playlist.description }` }}></p>
      </div>
      <img
        src={ playlist.images[0].url }
        alt={ playlist.name }
      />
    </div>
  )
}

export default PlaylistCard;
