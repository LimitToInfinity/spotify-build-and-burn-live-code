import './TrackCard.css';

const TrackCard = ({ track }) => {

  return (
    <div className="track-card">
      <h3>{ track.name }</h3>
      <img
        src={ track.album.images[0].url }
        alt={ track.name }
      />
    </div>
  )
}

export default TrackCard;