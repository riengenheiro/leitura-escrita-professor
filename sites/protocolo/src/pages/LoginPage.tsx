import { Login } from '../components/Login'

interface LoginPageProps {
  onLogin: (email: string) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-dark-900">
      <Login onLogin={onLogin} />
    </div>
  )
}
