import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      {/*Header Top  */}
      {/* logo */}
    <div className='flex justify-between items-center p-3 md:px-20'>
        <div className='flex items-center'>
            <img 
              width={'50px'} 
              height={'50px'} 
              src='https://static.vecteezy.com/system/resources/previews/028/247/966/non_2x/stack-of-old-book-png.png' 
              alt='logo' 
            />
            <h1 className='text-2xl ms-3 font-bold md:hidden'>Bookstore</h1>
          </div>
        {/* Logout */}
        <button className='bg-black text-white px-3 py-2 rounded hover:bg-white hover:text-black flex items-center border'>Logout<FaPowerOff className='ms-3'/></button>
    </div>
      {/* Hedaer marque */}
      <div className='bg-black text-white p-3'>
      <marquee>Welcome Admin, Your all set to manage and monitor the system. Let's get into work !!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
