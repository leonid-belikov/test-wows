interface ErrorLogOptions {
  tag: string
  context?: string
}

const ErrorService = {
  normalize(error: unknown): Error {
    if (error instanceof Error) return error
    if (typeof error === 'string') return new Error(error)
    return new Error(
      typeof error === 'object' && error !== null ? JSON.stringify(error) : String(error),
    )
  },
  log(error: unknown, { tag, context }: ErrorLogOptions) {
    console.debug(`[${tag}] Error occurred:`, this.normalize(error))
    if (context) {
      console.debug(`Context:`, context)
    }
  },
}

export default ErrorService
