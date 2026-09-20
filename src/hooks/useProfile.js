import { useQuery } from '@tanstack/react-query'
import { getProfile } from '../services/profiles'

export function useProfile(userId) {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: () => getProfile(userId),
    enabled: !!userId
  })
}