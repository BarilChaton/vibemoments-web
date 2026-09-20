import { supabase } from './supabase.js'

const SIGNED_URL_EXPIRY = 3600

export const getNearbyVibes = async (latitude, longitude, radiusMeters = 25_000, limit = 50) => {
  const { data, error } = await supabase.rpc('get_nearby_vibes', {
    user_lat: latitude,
    user_lng: longitude,
    radius_meters: radiusMeters,
    result_limit: limit
  })

  if (error) throw error

  const vibes = await Promise.all(
    (data ?? []).map(async (vibe) => {
      if (!vibe.media_path) return vibe

      const { data: signedData, error: signedError } = await supabase.storage
        .from('vibes')
        .createSignedUrl(vibe.media_path, SIGNED_URL_EXPIRY)

      if (signedError) {
        console.error('Failed to create signed Vibe URL:', signedError)
        return vibe
      }

      return {
        ...vibe,
        media_url: signedData.signedUrl
      }
    })
  )

  return vibes
}