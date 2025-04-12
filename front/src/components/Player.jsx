import React, { useState } from 'react'
import QueueModal from './QueueModal'
import AddToPlaylistModal from './AddToPlaylistModal'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const [queueVisible, setQueueVisible] = useState(false)
  const [addModalVisible, setAddModalVisible] = useState(false)

  const togglePlayPause = () => setIsPlaying(prev => !prev)
  const handleVolumeChange = (e) => setVolume(e.target.value)
  const toggleQueue = () => setQueueVisible(prev => !prev)
  const toggleAddModal = () => setAddModalVisible(prev => !prev)

  const queue = [
    { songId: "1", title: 'Canción 1', artist: 'Artista 1', duration: '3:45' },
    { songId: "2", title: 'Canción 2', artist: 'Artista 2', duration: '4:05' },
    { songId: "3", title: 'Canción 3', artist: 'Artista 3', duration: '2:58' }
  ]

  const currentSong = {
    songId: '1',
    title: 'Canción 1',
    artist: 'Artista 1',
    duration: '3:33'
  }

  const handleAddToPlaylist = (playlist) => {
    console.log(`Añadir "${currentSong.title}" a la playlist "${playlist}"`)
    setAddModalVisible(false)
  }

  return (
    <>
      <footer className="player">
        <div className="player-container">
          <div className="progress-bar">
            <span>0:00</span>
            <input type="range" min="0" max="100" />
            <span>{currentSong.duration}</span>
          </div>

          <div className="player-controls">
            <div className="song-card">
              <div className="song-thumbnail">
                <img src="/assets/Master_of_Puppets_cover.jpg" alt="cover" className="song-thumbnail"/>
              </div>
              <div className="song-text">
                <p>{currentSong.title}</p>
                <small>{currentSong.artist}</small>
              </div>
            </div>

            <div className="control-buttons">
              <button>Like</button>
              <button>⏮</button>
              <button onClick={togglePlayPause}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button>⏭</button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
              <button onClick={toggleAddModal}>+</button>
              <button onClick={toggleQueue}>Queue</button>
            </div>
          </div>
        </div>
      </footer>

      {queueVisible && <QueueModal onClose={toggleQueue} queue={queue} />}
      {addModalVisible && (
        <AddToPlaylistModal
          onClose={toggleAddModal}
          onAdd={handleAddToPlaylist}
        />
      )}
    </>
  )
}

export default Player
