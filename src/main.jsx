import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FoodGallery from './foods.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodGallery />
  </StrictMode>,
)
