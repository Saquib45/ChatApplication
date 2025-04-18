import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from 'react-router'
import AppRoutes from "./config/routes.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster/></Toaster>
      <AppRoutes/>
    </BrowserRouter>
  </StrictMode>,
)
