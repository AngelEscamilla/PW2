import React from 'react'
import { useParams } from 'react-router-dom'
import SongCard from '../components/Songcard'
import AlbumComponent from '../components/AlbumComponent'

const ArtistDetails = () => {
  const { artistId } = useParams()

  const artist = {
    id: artistId,
    name: 'Artista 1',
    songs: [
      { songId: '1', title: 'Canción 1', artist: 'Artista 1', albumId: '1' },
      { songId: '2', title: 'Canción 2', artist: 'Artista 1', albumId: '1' },
    ],
    albums: [
      {
        albumId: '1',
        albumName: 'Album 1',
        artist: 'Artista 1',
      },
      {
        albumId: '2',
        albumName: 'Album 2',
        artist: 'Artista 1',
      },
    ],
  }

  return (
    <div className="artist-details">
      <div className="artist-header">
        <h1>{artist.name}</h1>
      </div>

      <div className="artist-section">
        <h2>Canciones</h2>
        <div className="song-grid">
          {artist.songs.map((song, index) => (
            <SongCard
              key={index}
              title={song.title}
              artist={song.artist}
              albumId={song.albumId}
            />
          ))}
        </div>
      </div>

      <div className="artist-section">
        <h2>Albumes</h2>
        <div className="song-grid">
          {artist.albums.map((album, index) => (
            <AlbumComponent
              key={index}
              albumId={album.albumId}
              albumName={album.albumName}
              artist={album.artist}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails
