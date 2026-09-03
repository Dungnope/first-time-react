import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  {FoodGallery, Testing, TodoList, DoubleCurlies} from './foods.jsx'
import Profile from './PassJsxprop.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Profile />
  </StrictMode>,
)
