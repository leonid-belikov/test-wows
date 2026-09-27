import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { QueryService } from 'services'
import { QueryClientProvider } from '@tanstack/react-query'

QueryService.init()

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <QueryClientProvider client={QueryService.getClient()}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
