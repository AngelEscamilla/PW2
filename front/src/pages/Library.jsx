import React from 'react'
import { useParams } from 'react-router-dom'
import SongItem from '../components/SongItem'

const Library = () => {
  const { playlistName } = useParams()

  const playlist = {
    name: decodeURIComponent(playlistName),
    songs: [
      { title: 'Cancion 1', duration: '3:20' },
      { title: 'Cancion 2', duration: '4:10' },
      { title: 'Cancion 3', duration: '1:59' },
    ],
  }

  return (
    <div className="library-page">
      <h2 className="playlist-title">{playlist.name}</h2>

      <div className="library-songs">
        {playlist.songs.map((song, index) => (
          <SongItem key={index} title={song.title} duration={song.duration} />
        ))}
      </div>
    </div>
  )
}

export default Library
