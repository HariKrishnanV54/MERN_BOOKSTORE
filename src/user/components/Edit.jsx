import React from 'react'
import { FaPen } from 'react-icons/fa'

function Edit() {
  return (
    <>
      {/* Button */}
      <button className='bg-black text-white font-bold p-2 items-center flex justify-center rounded hover:bg-white hover:text-black border'>
        <FaPen className='me-2'/> EDIT
      </button>
      {/* Offcanvas */}
    </>
  )
}

export default Edit
