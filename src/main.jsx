import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/index.jsx'

import "./sass/main.scss"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
