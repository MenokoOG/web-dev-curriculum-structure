import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoalProvider } from './context/GoalProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoalProvider>
        <App />
      </GoalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
