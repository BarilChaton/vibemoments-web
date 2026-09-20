import { useEffect, useState } from 'react'
import { HiOutlineArrowPath, HiOutlineMapPin } from 'react-icons/hi2'
import { getCurrentPosition } from '../services/location'
import { useNearbyVibes } from '../hooks/useNearbyVibes'
import VibeFeed from '../components/vibes/VibeFeed'

export default function Home() {
  const [position, setPosition] = useState(null)
  const [locationError, setLocationError] = useState('')
  const [locationLoading, setLocationLoading] = useState(true)

  const { data: vibes = [], isLoading: vibesLoading, error: vibesError, refetch } = useNearbyVibes(position)

  useEffect(() => {
    loadLocation()
  }, [])

  async function loadLocation() {
    setLocationLoading(true)
    setLocationError('')

    try {
      const position = await getCurrentPosition()
      setPosition(position)
    } catch (error) {
      console.error(error)
      setLocationError('We need your location to show nearby Vibes.')
    } finally {
      setLocationLoading(false)
    }
  }

  async function handleRefresh() {
    if (!position) {
      await loadLocation()
      return
    }

    await refetch()
  }

  const loading = locationLoading || vibesLoading

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

        <button
          onClick={handleRefresh}
          disabled={loading}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-vibe-light-surface text-vibe-light-text shadow-sm transition hover:scale-105 disabled:opacity-50">
          <HiOutlineArrowPath className={`text-xl ${loading ? 'animate-spin' : ''}`} />
        </button>
      </header>

      {locationError && (
        <div className="flex min-h-100 flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold text-vibe-light-text">Location needed</h2>
          <p className="mt-2 max-w-md text-vibe-light-muted">{locationError}</p>

          <button onClick={loadLocation} className="mt-5 rounded-2xl bg-vibe-teal px-5 py-3 font-semibold text-white">
            Try again
          </button>
        </div>
      )}

      {!locationError && vibesError && (
        <div className="flex min-h-100 items-center justify-center text-center">
          <div>
            <h2 className="text-xl font-bold text-vibe-light-text">Couldn't load Vibes</h2>
            <p className="mt-2 text-vibe-light-muted">{vibesError.message}</p>
          </div>
        </div>
      )}

      {!locationError && !vibesError && loading && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-4/5 animate-pulse rounded-3xl bg-vibe-light-surface" />
          ))}
        </div>
      )}

      {!locationError && !vibesError && !loading && vibes.length === 0 && (
        <div className="flex min-h-112.5 flex-col items-center justify-center text-center">
          <div className="mb-5 h-3 w-3 rounded-full bg-vibe-lime" />

          <h2 className="text-2xl font-bold text-vibe-light-text">Nothing nearby yet</h2>

          <p className="mt-3 max-w-md text-vibe-light-muted">
            There aren't any active Vibes within 25 km. Check back soon or open the VibeMoments app to share one.
          </p>
        </div>
      )}

      {!locationError && !vibesError && !loading && vibes.length > 0 && <VibeFeed vibes={vibes} />}
    </div>
  )
}
