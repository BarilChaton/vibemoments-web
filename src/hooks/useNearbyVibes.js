import { useQuery } from '@tanstack/react-query'
import { getNearbyVibes } from '../services/vibes'

export function useNearbyVibes(position) {
  return useQuery({
    queryKey: ['nearby-vibes', position?.latitude, position?.longitude],
    queryFn: () => getNearbyVibes(position.latitude, position.longitude),
    enabled: !!position,
    staleTime: 30_000
  })
}