import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const [toggle,setToggle] = useState(false)
  return (
    <>
      {/* Header top part */}
      <div className='grid grid-cols-3 p-3'>

        {/* logo */}
        <div className='flex items-center'>
          <img 
            width={'50px'} 
            height={'50px'} 
            src='https://static.vecteezy.com/system/resources/previews/028/247/966/non_2x/stack-of-old-book-png.png' 
            alt='logo' 
          />
          <h1 className='text-2xl ms-3 font-bold md:hidden'>Bookstore</h1>
        </div>

        {/* title */}
        <div className='md:flex justify-center items-center hidden'> 
          <h1 className='text-3xl font-bold'>Bookstore</h1>
        </div>

        {/* Login / Social Icons */}
        <div className='md:flex items-center justify-end gap-3 hidden'>
          <FaInstagram />
          <FaTwitter />
          <FaFacebookSquare />
          <Link 
            to={'/login'} 
            className='flex justify-center items-center ms-5 border rounded px-3 py-2 hover:!bg-black hover:!text-white transition'
          >
            <FaUser className='me-1' /> Login
          </Link>
        </div>

      </div>
      
      {/* Navigation */} 
      <nav className='bg-black w-full p-3 text-white md:flex justify-center items-center p-3'>
       {/* menu & login at small screen */}
       <div className='flex justify-between item-center text-2xl md:hidden'>
        <button onClick={()=>setToggle(!toggle)}><FaBars/></button>
          <Link 
            to={'/login'} 
            className='flex justify-center items-center ms-5 border border-black rounded px-3 py-2 hover:!bg-black hover:!text-white transition'
          >
            <FaUser className='me-1' /> Login
            </Link>
       </div>
      <ul className={toggle?'flex flex-col':'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4'>HOME</Link></li>
          <li><Link to={'/books'} className='md:mx-4'>BOOKS</Link></li>
          <li><Link to={'/contact'} className='md:mx-4'>CONTACTS</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header