import { signOut } from '../services/auth'

export default function Profile() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-vibe-coral">Your account</p>

      <h1 className="text-4xl font-bold tracking-tight text-vibe-light-text">Profile</h1>

      <p className="mt-2 text-vibe-light-muted">Profile details will go here.</p>

      <button
        onClick={signOut}
        className="mt-8 rounded-2xl bg-vibe-coral px-5 py-3 font-semibold text-vibe-light-text transition hover:brightness-95">
        Sign out
      </button>
    </div>
  )
}
