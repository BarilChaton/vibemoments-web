export default function VibeFeed() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-4/5 overflow-hidden rounded-3xl bg-vibe-light-surface" />
      ))}
    </div>
  )
}
