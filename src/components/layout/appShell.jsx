import Sidebar from './Sidebar'
import RightSidebar from './RightSidebar'

export default function AppShell({ page, setPage, children }) {
  return (
    <div className="min-h-screen bg-vibe-light-bg text-vibe-light-text">
      <div className="flex min-h-screen w-full">
        <Sidebar page={page} setPage={setPage} />

        <main className="min-w-0 flex-1 px-6 py-8 lg:px-10">{children}</main>

        <RightSidebar />
      </div>
    </div>
  )
}
