import React from 'react'
import { useParams } from 'react-router-dom'
import SongItem from '../components/SongItem'

const Library = () => {
  const { playlistName } = useParams()

  const playlist = {
    name: decodeURIComponent(playlistName),
    songs: [
      {songId:'1', title: 'Cancion 1', artist:'Artista 1', artistId:'1', duration: '3:20' },
      {songId:'2', title: 'Cancion 2', artist:'Artista 1', artistId:'1', duration: '4:10' },
      {songId:'3', title: 'Cancion 3', artist:'Artista 1', artistId:'1', duration: '1:59' }
    ],
  }

  return (
    <div className="library-page">
      <h2 className="playlist-title">{playlist.name}</h2>

      <div className="library-songs">
        {playlist.songs.map((song, index) => (
          <SongItem key={index} songId={song.songId} title={song.title} artist={song.artist} artistId={song.artistId} duration={song.duration}/>
        ))}
      </div>
    </div>
  )
}

export default Library
