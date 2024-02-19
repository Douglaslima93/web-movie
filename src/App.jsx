import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      
    <nav id='navbar'>

      <h2>
        <Link to="/">Movies</Link>
      </h2>
        <Link to="/Movie/1">Movie Filmes</Link>
        <Link to="/search">Search</Link>
    </nav>

    <h2>Movies Lib</h2>
    <Outlet/>

    </div>
  )
}

export default App
