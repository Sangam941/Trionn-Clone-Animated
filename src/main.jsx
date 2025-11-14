import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MousePointer from './components/MousePointer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MousePointer/>
    <App />
  </StrictMode>,
)
