import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongCard = ({ title, artist, albumId }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/album/${albumId}`)
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    console.log('Play button clicked')
  }

  return (
    <div className="song-card" onClick={handleCardClick}>
      <div className="song-image">
        <img src="/assets/Master_of_Puppets_cover.jpg" alt="cover" className="album-thumbnail" />
        <button className="play-button" onClick={handlePlayClick}>▶</button>
      </div>
      <div className="song-info">
        <p>{title}</p>
        <small>{artist}</small>
      </div>
    </div>
  )
}

export default SongCard
