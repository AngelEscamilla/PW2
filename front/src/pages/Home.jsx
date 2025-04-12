import React from 'react'
import SongCard from '../components/Songcard'

const Home = () => {
    return (
        <div>
            <h1>Welcome Back</h1>
            <div className="song-grid">
                <SongCard
                    title="Canción 1"
                    artist="Artista 1"
                    albumId="1"
                />
                <SongCard
                    title="Canción 2"
                    artist="Artista 2"
                    albumId="2"
                />
                {/* ...more cards */}
            </div>
        </div>
    )
}

export default Home
