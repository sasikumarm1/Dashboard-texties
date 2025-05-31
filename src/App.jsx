import React from 'react'
import RoutesComponent from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'
import Topbar from './Components/Topbar'

function App() {
  return (
    
    <Router>
      <div className="">
        <Topbar />
        <div className="">
          <Sidebar />
          <RoutesComponent />
        </div>
      </div>
    </Router>
  )
}

export default App
