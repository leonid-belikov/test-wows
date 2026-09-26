import { QueryCache, QueryClient } from '@tanstack/react-query'

let queryClient: QueryClient

const QueryService = {
  init: () => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: (failureCount) => failureCount < 2,
        },
      },
      queryCache: new QueryCache({
        onError(error, query) {
          console.error('[QueryService] error', error, query.queryKey)
        },
      }),
    })
  },

  getClient: () => {
    if (!queryClient) {
      throw new Error('[QueryService] Not initialized')
    }

    return queryClient
  },
}

export default QueryService
