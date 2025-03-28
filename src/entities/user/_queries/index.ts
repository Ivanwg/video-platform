import { useQueryClient } from '@tanstack/react-query'
import { UserId } from '../_domain/types'
import { getUserProfileAction } from '../_actions'

const baseKey = 'user'

export const getProfileQuery = (userId: UserId) => ({
  queryKey: [baseKey, 'getProfileById', userId],
  queryFn: () => getUserProfileAction({ userId }),
})

export const useInvalidateProfile = () => {
  const queryClient = useQueryClient()

  return (userId: UserId) =>
    queryClient.invalidateQueries({
      queryKey: [baseKey, 'getProfileById', userId],
    })
}
