import React, { useState } from 'react'

const CreatePlaylistModal = ({ onClose }) => {
  const [playlistName, setPlaylistName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Creating playlist:', {
      name: playlistName,
      description: description
    })
    setPlaylistName('')
    setDescription('')
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Crear nueva lista</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de la lista"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
          <div className="modal-buttons">
            <button type="submit">Crear</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePlaylistModal
