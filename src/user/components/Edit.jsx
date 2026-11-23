import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offCanvas, setOffCanvas] = useState(false)

  return (
    <>
      {/* Button */}
      <button onClick={() => setOffCanvas(true)} className='bg-black text-white font-bold p-2 items-center flex justify-center rounded hover:bg-white hover:text-black border'>
        <FaPen className='me-2' /> EDIT
      </button>

      {/* Offcanvas */}
      {offCanvas && (
        <div>
          <div className='bg-gray-500/50 w-full h-full inset-0 fixed' onClick={() => setOffCanvas(false)}></div>
          <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
            
            {/* Head */}
            <div className='flex justify-between items-center mb-5 bg-black text-white p-3 text-2xl'>
              <h1>Update User Profile</h1>
              <FaX className='cursor-pointer' onClick={() => setOffCanvas(false)} />
            </div>

            {/* Body */}
            <div className='flex flex-col justify-center items-center my-5 w-full'>
              <label htmlFor='userProfileEdit' className='relative cursor-pointer'>
                <input type="file" id='userProfileEdit' hidden />
                <img style={{ height: '150px', width: '150px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDhO9kX7gMkypLyF6PE52dDfvyE-CD_9nlX27RozRG0907QWVDvNXX1mx&s=10" alt="user" />
                <span className='bg-black text-white px-2 py-2 rounded absolute bottom-2 right-2'><FaPen /></span>
              </label>

              {/* username */}
              <div className='mt-10 mb-3 w-full px-5'>
                <input type="text" placeholder='username' className='w-full bg-gray-300 rounded p-2' />
              </div>

              {/* password */}
              <div className='mb-3 w-full px-5'>
                <input type="password" placeholder='password' className='w-full bg-gray-300 rounded p-2' />
              </div>

              {/* New password */}
              <div className='mb-3 w-full px-5'>
                <input type="password" placeholder='new password' className='w-full bg-gray-300 rounded p-2' />
              </div>

              {/* Bio */}
              <div className='mb-3 w-full px-5'>
                <input placeholder='bio' className='w-full bg-gray-300 rounded p-2' />
                {/* reset update */}
                <div className='flex justify-end w-full mt-3'>
                  <button type="button" className='bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-1 rounded cursor-pointer'>RESET</button>
                  <button type="button" className='bg-green-600 hover:bg-green-700 text-white px-5 py-1 rounded ms-3 cursor-pointer'>UPDATE</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Edit