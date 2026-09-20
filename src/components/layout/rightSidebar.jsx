export default function RightSidebar() {
  return (
    <aside className="hidden w-80 shrink-0 bg-vibe-light-surface px-8 py-8 shadow-[-10px_0_30px_-24px_rgba(7,63,80,0.28)] xl:block">
      <div className="sticky top-8 space-y-8">
        <section>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-vibe-coral">Around you</p>

          <h2 className="text-lg font-bold text-vibe-light-text">People nearby</h2>

          <p className="mt-1 text-sm leading-relaxed text-vibe-light-muted">Discover people who share your interests.</p>
        </section>
      </div>
    </aside>
  )
}
