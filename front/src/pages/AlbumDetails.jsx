import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SongItem from '../components/SongItem'

const albums = {
  '1': {
    id: '1',
    name: 'Album 1',
    artist: 'Artista 1',
    artistId: '1',
    releaseDate: '2023-09-01',
    thumbnail: '/assets/Master_of_Puppets_cover.jpg',
    songs: [
      { songId: '1', title: 'Cancion 1', artist: 'Artista 1', artistId: '1', duration: '3:20' },
      { songId: '2', title: 'Cancion 2', artist: 'Artista 1', artistId: '1', duration: '4:10' },
      { songId: '3', title: 'Cancion 3', artist: 'Artista 1', artistId: '1', duration: '1:59' }
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
          <Link to={`/artist/${encodeURIComponent(album.artistId)}`} className="logo-link">
            <p>{album.artist}</p>
          </Link>
          <p>{album.releaseDate}</p>
        </div>
      </div>
      <ul className="song-list">
        {album.songs.map((song, index) => (
          <SongItem key={index} songId={song.songId} title={song.title} artist={song.artist} artistId={song.artistId} duration={song.duration} />
        ))}
      </ul>
    </div>
  )
}

export default AlbumDetails
