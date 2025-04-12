import React from 'react'
import { Link } from 'react-router-dom'
// import { FaMusic } from 'react-icons/fa'

const Sidebar = () => {
  const playlists = ['Lista 1', 'Lista 2', 'Lista 3', 'Lista 4']

  return (
    <aside className="sidebar">
      <div className="logo-section">
        {/* <FaMusic className="logo-icon" /> */}
        <h2>Musicapp</h2>
      </div>

      <button className="create-button">Crear Lista</button>

      <ul className="playlist">
        {playlists.map((listName, index) => (
          <li key={index}>
            <Link to={`/library/${encodeURIComponent(listName)}`} className="playlist-link">
              {listName}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
