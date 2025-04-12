import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route , Routes} from 'react-router'
import AppRout

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat" element={<h1>This is chat page</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
