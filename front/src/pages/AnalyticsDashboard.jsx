import React, { useState } from 'react'
import SongItem from '../components/SongItem'
import AddAlbumModal from '../components/AddAlbumModal'
import AddSongModal from '../components/AddSongModal'

const mockReports = {
  recientes: [
    { title: 'Canción 1', artist: 'Artista 1', duration: '3:10' },
    { title: 'Canción 2', artist: 'Artista 1', duration: '2:58' },
  ],
  masLikes: [
    { title: 'Canción Likeada 1', artist: 'Artista 1', duration: '4:00' },
    { title: 'Canción Likeada 2', artist: 'Artista 1', duration: '3:44' },
  ],
  masGuardadas: [
    { title: 'Guardada 1', artist: 'Artista 1', duration: '3:30' },
    { title: 'Guardada 2', artist: 'Artista 1', duration: '3:20' },
  ],
}

const AnalyticsDashboard = () => {
  const [isAlbumModalOpen, setAlbumModalOpen] = useState(false)
  const [isSongModalOpen, setSongModalOpen] = useState(false)
  const [selectedReport, setSelectedReport] = useState('recientes')

  const handleAddAlbum = (albumData) => {
    console.log('New Album:', albumData)
  }

  const handleAddSong = (songData) => {
    console.log('New Song:', songData)
  }

  const handleReportChange = (e) => {
    setSelectedReport(e.target.value)
  }

  const songs = mockReports[selectedReport]

  return (
    <div className="analytics-dashboard">
      <header className="dashboard-header">
        <h1>Musicapp</h1>
      </header>

      <div className="dashboard-buttons">
        <button onClick={() => setAlbumModalOpen(true)}>Crear Album</button>
        <button onClick={() => setSongModalOpen(true)}>Publicar Cancion</button>
      </div>

      <div className="report-select">
        <label htmlFor="reportType">Ver reporte:</label>
        <select id="reportType" value={selectedReport} onChange={handleReportChange}>
          <option value="recientes">Canciones añadidas recientemente</option>
          <option value="masLikes">Canciones con más likes</option>
          <option value="masGuardadas">Canciones más guardadas en listas</option>
        </select>
      </div>

      <div className="dashboard-songs">
        {songs.map((song, i) => (
          <SongItem
            key={i}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>

      <AddAlbumModal
        isOpen={isAlbumModalOpen}
        onClose={() => setAlbumModalOpen(false)}
        onAdd={handleAddAlbum}
      />

      <AddSongModal
        isOpen={isSongModalOpen}
        onClose={() => setSongModalOpen(false)}
        onAdd={handleAddSong}
      />
    </div>
  )
}

export default AnalyticsDashboard
