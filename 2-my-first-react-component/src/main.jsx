import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { MyFirstComponent } from './my_first_component.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyFirstComponent />
  </React.StrictMode>,
)
