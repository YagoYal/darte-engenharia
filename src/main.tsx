import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/globals.css'
import App from './App'
import { initGA } from '@/analytics/google'
import { initClarity } from '@/integrations/clarity'

initGA()
initClarity()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
