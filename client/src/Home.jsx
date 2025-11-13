import { useState } from 'react'
import { Link } from 'react-router'
import './Home.css'

function Home() {

  return (
    <>
    <div>
        <h1>Welcome to the Digital Atlas</h1>
        <Link to="/atlas">Navigate to the map</Link>
        <p>Tip 1</p>
        <p>Tip 2</p>
        <p>Tip 3</p>
    </div>
    </>
  )
}

export default Home