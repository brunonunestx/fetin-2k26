import { useQuery } from '@tanstack/react-query'

import { customInstance } from '@/src/services/config/http-client'

export function useApiHealthQuery() {
  return useQuery({
    queryKey: ['health'],
    queryFn: () => customInstance<{ status: string }>({ url: '/health', method: 'GET' }),
  })
}
