import React from 'react'
 import { Link } from 'react-router-dom'
function Users() {
  return (
    <div className='container'>
        <h2>User Detail Page..</h2>
        <h2>
        <Link to ='/users/usman'>User Usman</Link>
        </h2>
        <h2>
            <Link to='/users/muneer'>User Muneer</Link>
        </h2>
        <h2>
            <Link to='/users/abdullah'>User Abdullah</Link>
        </h2>
    </div>
  )
}

export default Users