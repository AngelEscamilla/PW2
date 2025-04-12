import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('listener')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            // const isArtist = role === 'artist';
            const userIsArtist = true;
            onLogin({ isArtist: userIsArtist })
            navigate('/')
        }
    }

    return (
        <div className="auth-page">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
            <p>¿No tienes cuenta? <a href="/signup">Registrarse</a></p>
        </div>
    )
}

export default Login
