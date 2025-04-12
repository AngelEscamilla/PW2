import React from 'react'
// import { FaPlay, FaEllipsisH } from 'react-icons/fa'

const SongItem = ({ title, duration }) => {
  return (
    <div className="song-item">
      <div className="song-left">
        {/* <FaPlay className="play-icon" /> */}
        <span>{title}</span>
      </div>
      <div className="song-right">
        <span>{duration}</span>
        {/* <FaEllipsisH className="more-icon" /> */}
      </div>
    </div>
  )
}

export default SongItem
