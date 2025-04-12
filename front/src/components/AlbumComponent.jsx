import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumComponent = ({ albumId, albumName, artist, releaseDate }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/album/${albumId}`)
  }

  const handlePlayClick = (e) => {
    e.stopPropagation()
    console.log('Play album button clicked')
  }

  return (
    <div className="song-card" onClick={handleCardClick}>
      <div className="song-image">
        <img src="/assets/Master_of_Puppets_cover.jpg" alt="cover" className="album-thumbnail" />
        <button className="play-button" onClick={handlePlayClick}>▶</button>
      </div>
      <div className="song-info">
        <p>{albumName}</p>
        <small>{artist}</small>
        {/* <small>{releaseDate}</small> */}
      </div>
    </div>
  )
}

export default AlbumComponent
