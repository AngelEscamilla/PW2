import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import './Topbar.css'

const Topbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setSearch(e.target.value)
    navigate(`/search?q=${encodeURIComponent(e.target.value)}`)
  }

  const clearSearch = () => {
    setSearch('')
    navigate('/search?q=')
  }

  return (
    <div className="topbar">
      <input
        type="text"
        className="search-input"
        placeholder="Busqueda..."
        value={search}
        onChange={handleInputChange}
      />
      {search && (
        <button className="clear-btn" onClick={clearSearch}>
          ✕
        </button>
      )}
    </div>
  )
}

export default Topbar
