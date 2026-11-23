import React from 'react'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50  '>
      <h1 className='text-center font-semibold text-2xl'>Upload Book Details</h1>
      {/* Grid */}
      <div className='md:grid grid-cols-2 mt-10 w-full'>
        {/* 1st section */}
        <div className='px-5'>
            <div className='mb-3'>
                <input type="text" placeholder='Book Title'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Author'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Book Cover'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Total Price'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Original Price'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Discount price'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <textarea type="text" rows={'5'} placeholder='Abstract'  className='w-full p-2 bg-white rounded' />
            </div>
        </div>

        {/* 2nd section */}
        <div>
            <div className='mb-3'>
                <input type="text" placeholder='Publisher'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='ISBN'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Language'  className='w-full p-2 bg-white rounded' />
            </div>

            <div className='mb-3'>
                <input type="text" placeholder='Category'  className='w-full p-2 bg-white rounded' />
            </div>

            {/* upload Book Images */}

            <div className='my-10 flex justify-center items-center'>
                <label htmlFor="BookImages">
                    <input type="file" id='BookImages' hidden/>
                    <img width={'270px'} height={'270px'} src="https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-icon-upload-clipart-blue-button-vector-file-png-image_15952470.png" alt="No book" />
                </label>
            </div>

        </div>
      </div>
    </div>
  )
}

export default UploadBooks
