import { useState } from 'react'
import AppShell from './components/layout/AppShell'
import Home from './pages/home'
import Inbox from './pages/inbox'
import Friends from './pages/friends'
import Profile from './pages/profile'

export default function App() {
  const [page, setPage] = useState('home')

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
