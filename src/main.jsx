import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScoreCard } from './components/scorecard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreCard />
  </StrictMode>,
)
