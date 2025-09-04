import { lazy, } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(()=>import('./App'))
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
