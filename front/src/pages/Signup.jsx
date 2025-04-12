import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('listener')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      const userIsArtist = role === 'artist';
      // const userIsArtist = true;
      onSignup({ isArtist: userIsArtist })
      navigate('/')
    }
  }

  return (
    <div className="auth-page">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <select value={role} onChange={e => setRole(e.target.value)} >
          <option value="listener">Usuario</option>
          <option value="artist">Artista</option>
        </select>
        <button type="submit">Crear cuenta</button>
      </form>
      <p>¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
    </div>
  )
}

export default Signup
