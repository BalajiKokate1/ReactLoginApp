import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
         <p>
        You need to Login First
        <Link to="/login">Click Here to Login</Link>
      </p>
      
    </div>
  )
}

export default HomePage
