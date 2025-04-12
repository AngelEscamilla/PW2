import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Player from './components/Player'
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import AlbumDetails from './pages/AlbumDetails'

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/album/:id" element={<AlbumDetails />} />
          {/* <Route path="/library" element={<Library />} /> */}
          <Route path="/library/:playlistName" element={<Library />} />
        </Routes>
      </div>
      <Player />
    </div>
  )
}

export default App
