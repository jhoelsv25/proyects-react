import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FilterProvider } from './contexts/filterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <FilterProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </FilterProvider>


)
