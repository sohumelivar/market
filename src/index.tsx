import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@app/styles/index.scss'
import App from './app/App.tsx'
import { StoreProvider } from './app/providers/storeProvider/index.ts'

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </StoreProvider>
)
