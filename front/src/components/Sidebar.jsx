import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreatePlaylistModal from './CreatePlaylistModal'

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const playlists = ['Lista 1', 'Lista 2', 'Lista 3', 'Lista 4']

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <Link to="/" className="logo-link">
          <h2>Musicapp</h2>
        </Link>
      </div>

      <button className="create-button" onClick={openModal}>Crear Lista</button>

      <ul className="playlist">
        {playlists.map((listName, index) => (
          <li key={index}>
            <Link to={`/library/${encodeURIComponent(listName)}`} className="playlist-link">
              {listName}
            </Link>
          </li>
        ))}
      </ul>

      {isModalOpen && <CreatePlaylistModal onClose={closeModal} />}
    </aside>
  )
}

export default Sidebar
