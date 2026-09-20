export default function VibeFeed({ vibes }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {vibes.map((vibe) => (
        <article key={vibe.id} className="group relative aspect-4/5 overflow-hidden rounded-3xl bg-vibe-light-surface shadow-sm">
          {vibe.media_type === 'video' ? (
            <video src={vibe.media_url} autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover" />
          ) : (
            <img src={vibe.media_url} alt={vibe.caption || 'Vibe'} loading="lazy" className="h-full w-full object-cover" />
          )}

          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            {vibe.display_name && <p className="text-lg font-semibold leading-tight">{vibe.display_name}</p>}

            {vibe.location_name && (
              <div className="mt-1 flex items-center gap-1 text-sm text-white/80">
                <span>◉</span>
                <span>{vibe.location_name}</span>
              </div>
            )}

            {vibe.caption && <p className="mt-1 text-base leading-snug text-white/90">{vibe.caption}</p>}
          </div>

          <div className="absolute right-4 bottom-16 h-3 w-3 rounded-full bg-vibe-lime shadow-sm" />
        </article>
      ))}
    </div>
  )
}
