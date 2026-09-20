import { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { useProfile } from './hooks/useProfile'
import AppShell from './components/layout/AppShell'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Inbox from './pages/Inbox'
import Friends from './pages/Friends'
import Profile from './pages/Profile'

export default function App() {
  const { session, user, loading: authLoading } = useAuth()
  const { data: profile, isLoading: profileLoading } = useProfile(user?.id)
  const [page, setPage] = useState('home')

  if (authLoading || (session && profileLoading)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-vibe-light-bg">
        <div className="h-3 w-3 animate-pulse rounded-full bg-vibe-lime" />
      </div>
    )
  }

  if (!session) {
    return <Auth />
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-vibe-light-bg px-6 text-vibe-light-text">
        <div className="max-w-md text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-vibe-coral">Profile needed</p>

          <h1 className="text-3xl font-bold tracking-tight">Finish setting up VibeMoments</h1>

          <p className="mt-3 text-vibe-light-muted">Your account exists, but your VibeMoments profile has not been set up yet.</p>
        </div>
      </div>
    )
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
