import './TracksContainer.css';

import TrackCard from "../../components/TrackCard/TrackCard";

const TracksContainer = ({ tracks }) => {

  const displayTracks = () => {
    return tracks.map(track => {
      return <TrackCard key={ track.id } track={ track } />
    })
  }

  return (
    <div className="tracks-area">
      <h2 className="tracks-container-title">Tracks</h2>
      <section className="tracks-container">
        { displayTracks() }
      </section>
    </div>
  )
}

export default TracksContainer;