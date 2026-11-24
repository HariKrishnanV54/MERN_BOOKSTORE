import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
      {/* Duplicate book status */}
      <div className='bg-gray-100 rounded p-5 mt-4 '>
        <div className='md:grid grid-cols-[3fr_1fr]'>
          {/* 1st  section*/}
          <div className='px-4'>
            <h1 className='text-2xl'>Title</h1>
            <h1 className='text-xl'>Author</h1>
            <h1 className='text-lg text-blue-600'>$ Price</h1>
            <p className='font-bold'>Abstract</p>

            <div className='flex'>
              <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230802/original/pngtree-pending-stamp-illustration-symbol-stamp-vector-picture-image_9294534.png" alt="" />
              <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20250801/ourmid/pngtree-distressed-red-sold-out-stamp-with-stars-png-image_16958308.webp" alt="" />
              <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20221010/original/pngtree-original-approved-stamp-and-badget-design-red-grunge-png-image_8669616.png" alt="" />
            </div>
          </div>
          {/* 2nd section */}
          <div className='px-10 mt-5 md:mt-0'>
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsg2UKSGc1Zg_dnllTISWp_-2yRXvgKTUIY7sUFmvFA&s=10" alt="book" />

            <div className='flex justify-end'>
              <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-5'>DELETE</button>
            </div>
          </div>     
        </div>
      </div>
    </div>
  )
}

export default UploadStatus