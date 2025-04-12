import React from 'react'
import { useParams } from 'react-router-dom'
import SongItem from '../components/SongItem'
// import './AlbumDetails.css'

// Dummy album data (replace with API or props if needed)
const albums = {
  '1': {
    id: '1',
    name: 'Álbum 1',
    artist: 'Artista X',
    releaseDate: '2023-09-01',
    thumbnail: '/images/album1.png',
    songs: [
      { id: '1', title: 'Cancion 1', duration: '3:20' },
      { id: '2', title: 'Cancion 2', duration: '4:10' },
      { id: '3', title: 'Cancion 3', duration: '1:59' }
    ]
  }
}

const AlbumDetails = () => {
  const { id } = useParams()
  const album = albums[id]

  if (!album) return <div style={{ color: 'white' }}>Álbum no encontrado.</div>

  return (
    <div className="album-details">
      <div className="album-header">
        <img src={album.thumbnail} alt={album.name} className="album-thumbnail" />
        <div className="album-info">
          <h2>{album.name}</h2>
          <p>{album.artist}</p>
          <p>{album.releaseDate}</p>
        </div>
      </div>
      <ul className="song-list">
        {album.songs.map((song, index) => (
          <SongItem
            key={song.id}
            index={index + 1}
            title={song.title}
            duration={song.duration}
          />
        ))}
      </ul>
    </div>
  )
}

export default AlbumDetails
