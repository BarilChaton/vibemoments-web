import { HiHome, HiOutlineChatBubbleLeftRight, HiOutlineUserGroup, HiOutlineUser } from 'react-icons/hi2'

export default function Sidebar({ page, setPage }) {
  const items = [
    { id: 'home', label: 'Vibes', icon: HiHome },
    { id: 'friends', label: 'Friends', icon: HiOutlineUserGroup },
    { id: 'inbox', label: 'Inbox', icon: HiOutlineChatBubbleLeftRight },
    { id: 'profile', label: 'Profile', icon: HiOutlineUser }
  ]

  return (
    <aside className="hidden w-64 shrink-0 bg-vibe-light-surface px-8 py-8 shadow-[10px_0_30px_-24px_rgba(7,63,80,0.28)] md:block">
      <div className="sticky top-8">
        <h1 className="mb-14 text-2xl font-bold tracking-tight text-vibe-light-text">VibeMoments</h1>

        <nav className="space-y-2">
          {items.map(({ id, label, icon: Icon }) => {
            const active = page === id

            return (
              <button
                key={id}
                onClick={() => setPage(id)}
                className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 transition ${
                  active
                    ? 'bg-vibe-light-surface text-vibe-light-text'
                    : 'text-vibe-light-muted hover:bg-vibe-light-surface/70 hover:text-vibe-light-text'
                }`}>
                <Icon className={`text-[23px] ${active ? 'text-vibe-light-text' : ''}`} />
                <span className="font-medium">{label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
