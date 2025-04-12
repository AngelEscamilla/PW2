import React from 'react'
import { Link } from 'react-router-dom'

const handleArtistClick = () => {
  navigate(`/artist/${artistId}`)
}

const SongItem = ({songId, title, artist, artistId, duration }) => {
  return (
    <div className="song-item">
      <div className="song-left">
        <span className="song-title">{title}</span>
        <Link to={`/artist/${encodeURIComponent(artistId)}`} className="logo-link">
          <span className="song-artist">{artist}</span>
        </Link>
      </div>
      <div className="song-right">
        <span>{duration}</span>
      </div>
    </div>
  )
}

export default SongItem

