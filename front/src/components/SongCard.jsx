import React from 'react'
import { useNavigate } from 'react-router-dom'
// import './SongCard.css'

const SongCard = ({ title, artist, albumId }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/album/${albumId}`)
  }

  return (
    <div className="song-card" onClick={handleClick}>
      <div className="song-image">
        <button className="play-button">▶</button>
      </div>
      <div className="song-info">
        <p>{title}</p>
        <small>{artist}</small>
      </div>
    </div>
  )
}

export default SongCard

