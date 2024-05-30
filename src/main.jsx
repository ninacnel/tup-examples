import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './components/services/contexts/theme/ThemeContext.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
       <App />   
    </ThemeContextProvider>
  </React.StrictMode>,
)
