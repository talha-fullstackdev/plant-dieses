import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Toast from './componnets/Toast.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toast/>
  </StrictMode>,
)
