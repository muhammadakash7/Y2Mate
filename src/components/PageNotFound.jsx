import React from 'react'
import ErrorImg from './assets/images/errorpage.jpeg'
function PageNotFound() {
  return (
    <div className='container text-center'>
        <h1 style={{color:'red'}}>Page Not Found</h1>
        <img  style={{width:'845px',height:"500px",marginLeft:'70px'}} src={ErrorImg} />
        
    </div>
  )
}

export default PageNotFound