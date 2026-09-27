import { QueryCache, QueryClient } from '@tanstack/react-query'
import { ErrorService } from './index.ts'

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
          ErrorService.log(error, {
            tag: 'QueryService',
            context: JSON.stringify(query.queryKey),
          })
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
