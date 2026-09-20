import { HiOutlineArrowPath, HiOutlineMapPin } from 'react-icons/hi2'
import VibeFeed from '../components/vibes/VibeFeed'

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-10 flex items-start justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-vibe-coral">Right now</p>

          <h1 className="text-4xl font-bold tracking-tight text-vibe-light-text">Nearby Vibes</h1>

          <div className="mt-1 flex items-center gap-1 text-sm text-vibe-light-muted">
            <HiOutlineMapPin className="text-base" />
            <span>Within 25 km</span>
          </div>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-vibe-light-surface text-vibe-light-text shadow-sm transition hover:scale-105">
          <HiOutlineArrowPath className="text-xl" />
        </button>
      </header>

      <VibeFeed />
    </div>
  )
}
