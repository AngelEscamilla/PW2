import React, { useEffect, useState } from 'react'

const AddSongModal = ({ isOpen, onClose, onAdd }) => {
    const [form, setForm] = useState({
        title: '',
        duration: '',
        audioFile: null,
        albumId: '',
    })

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const fetchAlbums = async () => {
            const mockAlbums = [
                { id: '1', title: 'Album 1' },
                { id: '2', title: 'Album 2' },
            ]
            setAlbums(mockAlbums)
        }

        if (isOpen) fetchAlbums()
    }, [isOpen])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(form)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Publicar Canción</h2>
                <form onSubmit={handleSubmit}>
                    <label>Titulo de la cancion</label>
                    <input name="title" type="text" placeholder="Titulo" onChange={handleChange} required />
                    <label>Duracion</label>
                    <input name="duration" type="text" placeholder="Duración (e.g. 3:45)" onChange={handleChange} required />
                    <label>Archivo de audio</label>
                    <input name="audioFile" type="file" accept="audio/*" onChange={handleChange} required />
                    <label>Album</label>
                    <select name="albumId" onChange={handleChange} required>
                        <option value="">Selecciona un álbum</option>
                        {albums.map((album) => (
                            <option key={album.id} value={album.id}>{album.title}</option>
                        ))}
                    </select>

                    <div className="modal-actions">
                        <button type="submit">Publicar</button>
                        <button type="button" onClick={onClose}>Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddSongModal
