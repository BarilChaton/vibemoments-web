import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signIn, signInWithGoogle, signUp } from '../services/auth'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const isLogin = mode === 'login'

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (isLogin) {
        await signIn(email, password)
      } else {
        const data = await signUp(email, password)

        if (!data.session) {
          setMessage('Check your email to confirm your account.')
        }
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setLoading(true)
    setError('')

    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  function switchMode() {
    setMode(isLogin ? 'register' : 'login')
    setError('')
    setMessage('')
  }

  return (
    <div className="flex min-h-screen bg-vibe-light-bg text-vibe-light-text">
      <section className="hidden flex-1 items-center justify-center bg-vibe-light-bg px-16 lg:flex">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-vibe-coral">VibeMoments</p>

          <h1 className="text-6xl font-bold leading-[1.05] tracking-tight text-vibe-light-text">
            See what's happening around you.
            <span className="block text-vibe-coral">Right now.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-vibe-light-muted">
            Discover spontaneous moments, people and experiences happening nearby.
          </p>
        </div>
      </section>

      <section className="flex w-full items-center justify-center bg-vibe-light-surface px-6 py-12 shadow-[-10px_0_30px_-24px_rgba(7,63,80,0.18)] lg:w-120">
        <div className="w-full max-w-sm">
          <div className="mb-10 lg:hidden">
            <p className="text-2xl font-bold text-vibe-light-text">VibeMoments</p>
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-vibe-coral">
            {isLogin ? 'Welcome back' : 'Join the moment'}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-vibe-light-text">
            {isLogin ? 'Sign in to VibeMoments' : 'Create your account'}
          </h2>

          <p className="mt-2 text-sm text-vibe-light-muted">
            {isLogin ? 'Continue discovering what is happening nearby.' : 'Start discovering Vibes and people around you.'}
          </p>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-vibe-light-muted/15 bg-white px-4 py-3.5 font-medium text-vibe-light-text shadow-sm transition hover:brightness-[0.99] disabled:cursor-not-allowed disabled:opacity-60">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-vibe-light-muted/20" />
            <span className="text-xs uppercase tracking-wider text-vibe-light-muted">or</span>
            <div className="h-px flex-1 bg-vibe-light-muted/20" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-vibe-light-text">Email</label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-vibe-light-muted/15 bg-vibe-light-bg px-4 py-3.5 text-vibe-light-text outline-none transition placeholder:text-vibe-light-muted/55 focus:border-vibe-teal/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-vibe-light-text">Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                placeholder="••••••••"
                className="w-full rounded-2xl border border-vibe-light-muted/15 bg-vibe-light-bg px-4 py-3.5 text-vibe-light-text outline-none transition placeholder:text-vibe-light-muted/55 focus:border-vibe-teal/40"
              />
            </div>

            {error && <div className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-700">{error}</div>}

            {message && <div className="rounded-2xl bg-vibe-ocean/10 px-4 py-3 text-sm text-vibe-light-text">{message}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-vibe-petrol px-4 py-3.5 font-semibold text-white shadow-md transition hover:bg-vibe-petrol-light disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? 'Please wait...' : isLogin ? 'Sign in' : 'Create account'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-vibe-light-muted">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button type="button" onClick={switchMode} className="font-semibold text-vibe-coral hover:underline">
              {isLogin ? 'Create one' : 'Sign in'}
            </button>
          </p>
        </div>
      </section>
    </div>
  )
}
