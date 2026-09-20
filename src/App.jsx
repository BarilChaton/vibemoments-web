import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import AppShell from './components/layout/AppShell'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Inbox from './pages/Inbox'
import Friends from './pages/Friends'
import Profile from './pages/Profile'

export default function App() {
  const { session, loading } = useAuth()
  const [page, setPage] = useState('home')

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-vibe-light-bg">
        <div className="h-3 w-3 animate-pulse rounded-full bg-vibe-lime" />
      </div>
    )
  }

  if (!session) {
    return <Auth />
  }

  const renderPage = () => {
    switch (page) {
      case 'inbox':
        return <Inbox />
      case 'friends':
        return <Friends />
      case 'profile':
        return <Profile />
      default:
        return <Home />
    }
  }

  return (
    <AppShell page={page} setPage={setPage}>
      {renderPage()}
    </AppShell>
  )
}
