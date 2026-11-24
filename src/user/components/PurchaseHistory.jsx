import React from 'react'

function PurchaseHistory() {
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
              <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="Purchased" />
            </div>
          </div>
          {/* 2nd section */}
          <div className='px-10 mt-5 md:mt-0'>
            <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsg2UKSGc1Zg_dnllTISWp_-2yRXvgKTUIY7sUFmvFA&s=10" alt="book" />

            <div className='flex justify-end'>
            </div>
          </div>     
        </div>
      </div>
    </div>
  )
}

export default PurchaseHistory
