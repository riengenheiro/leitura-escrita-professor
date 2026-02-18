import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { ManualInterativo } from './components/ManualInterativo'
import { useState, useEffect } from 'react'

function AppContent() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated')
    const email = localStorage.getItem('userEmail')
    if (auth === 'true' && email) {
      setIsAuthenticated(true)
      setUserEmail(email)
    }
  }, [])

  const handleLogin = (email: string) => {
    setUserEmail(email)
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userEmail', email)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserEmail('')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/manual" replace />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/manual"
        element={
          isAuthenticated ? (
            <ManualInterativo userEmail={userEmail} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return <AppContent />
}

export default App
