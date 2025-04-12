import React, { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Player from './components/Player'
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import AlbumDetails from './pages/AlbumDetails'
import ArtistDetails from './pages/ArtistDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AnalyticsDashboard from './pages/AnalyticsDashboard'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isArtist, setIsArtist] = useState(false)
  const location = useLocation()

  if (!isAuthenticated && !['/login', '/signup'].includes(location.pathname)) {
    return <Navigate to="/login" replace />
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login onLogin={({ isArtist }) => {
          setIsAuthenticated(true);
          setIsArtist(isArtist);
        }} />} />

        <Route path="/signup" element={<Signup onSignup={({ isArtist }) => {
          setIsAuthenticated(true);
          setIsArtist(isArtist);
        }} />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
  }

  if (isArtist) {
    return (
      <Routes>
        <Route path="/" element={<AnalyticsDashboard />} />
      </Routes>
    )
  }

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
          <Route path="/artist/:artistId" element={<ArtistDetails />} />
        </Routes>
      </div>
      <Player />
    </div>
  )
}

export default App
