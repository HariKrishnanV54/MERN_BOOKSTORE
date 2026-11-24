import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
        <img src="https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif" alt="Page Not Found" />
        <p>Oh No!</p>
        <h1 className='text-2xl font-medium'>Look Like You,re Lost</h1>
        <p>The page you are looking for is not available</p>
        <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded'>Home</Link>
    </div>
  )
}

export default PageNotFound
