import React, { useState } from 'react'

const AddAlbumModal = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [releaseDate, setReleaseDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({ title, description, image, releaseDate })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Añadir nuevo album</h2>
        <form onSubmit={handleSubmit}>
          <label>Titulo</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label>Descripcion</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

          <label>Portada</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />

          <label>Fecha de lanzamiento</label>
          <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} required />

          <div className="modal-actions">
            <button type="submit">Agregar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAlbumModal
