import { useState } from 'react'
import AppShell from './components/layout/AppShell'
import Home from './pages/Home'
import Inbox from './pages/Inbox'
import Friends from './pages/Friends'
import Profile from './pages/Profile'

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
