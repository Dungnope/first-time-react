import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Profile from './PassJsxprop.jsx'
import { ListOfElement } from './Greeting.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ListOfElement />
  </StrictMode>,
)
