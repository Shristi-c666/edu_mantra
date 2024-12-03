import React from 'react'
import { Link} from 'react-router-dom';

export const Home = () => {
  return (
    <>
    <div>Home</div>
    <Link to="/register" className="text-blue-500 hover:underline">
    Don’t have an account? Register
  </Link>
  </>
  )
}
