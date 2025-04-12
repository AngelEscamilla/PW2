import React from 'react'
import SongCard from '../components/Songcard'
import AlbumComponent from '../components/AlbumComponent'

const Home = () => {
    return (
        <div>
            <h1>Canciones</h1>
            <div className="song-grid">
                <SongCard
                    title="Canción 1"
                    artist="Artista 1"
                    albumId="1"
                    songId="1"
                />
                <SongCard
                    title="Canción 2"
                    artist="Artista 2"
                    albumId="2"
                    songId="2"
                />
            </div>

            <h1>Albums</h1>
            <div className="song-grid">
                <AlbumComponent
                    albumName="Album 1"
                    artist="Artista 1"
                    albumId="1"
                />
                <AlbumComponent
                    albumName="Album 2"
                    artist="Artista 2"
                    albumId="2"
                />
            </div>

        </div>


    )
}

export default Home
