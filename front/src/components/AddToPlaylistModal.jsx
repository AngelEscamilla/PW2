import React, { useEffect, useState } from 'react'

const AddToPlaylistModal = ({ onClose, onAdd }) => {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const fetchPlaylists = () => {
      const storedPlaylists = ['Lista 1', 'Lista 2', 'Lista 3']
      setPlaylists(storedPlaylists)
    }

    fetchPlaylists()
  }, [])

  return (
    <div className="add-modal-backdrop" onClick={onClose}>
      <div className="add-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Agregar a Playlist</h3>
        <ul className="playlist-list">
          {playlists.map((playlist, index) => (
            <li key={index} className="playlist-item">
              <span>{playlist}</span>
              <button onClick={() => onAdd(playlist)}>Agregar</button>
            </li>
          ))}
        </ul>
        <button className="close-add-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default AddToPlaylistModal
