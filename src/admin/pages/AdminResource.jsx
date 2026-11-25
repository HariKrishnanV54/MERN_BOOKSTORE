import React, { useState } from 'react'
import Footer from '../../user/components/Footer'
import AdminHeader from "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"

function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* 1st section - 1 grid */}
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        {/* 2nd section - 4 grid */}
        <div className='col-span-4'>

          <h2 className='text-2xl font-bold mb-10'>All Resource</h2>

          <div className='flex justify-center items-center my-8 font-bold text-lg'>
            <p onClick={() => (setCurrentTab(1))} className={currentTab == 1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' :
              'p-4 border-gray-200 border-b rounded cursor-pointer'}>Book</p>
            <p onClick={() => (setCurrentTab(2))} className={currentTab == 2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' :
              'p-4 border-gray-200 border-b rounded cursor-pointer'}>Users</p>
          </div>

          {/* tab contents */}
          {
            currentTab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-10'>
              {/* Duplicate according to the books */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'300px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCLuvLTiFsXXZPIPBzFp4-RQWsxqlM3uE0Ap3kqhsew&s=10' alt='Books' />
                <div className='flex flex-col justify-center items-center mt-4 text-center'>
                  <h3 className='text-blue-500 font-bold text-xl'>Author</h3>
                  <h4 className='text-lg font-bold'>Title</h4>
                  <p className='font-bold text-red-500 mt-1'>$ 123</p>
                  <button className='bg-green-600 text-white p-2 rounded w-full'>Approve</button>
                </div>
              </div>
            </div>
          }

          {
            currentTab == 2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* Duplicate according to the users */}
              <div className='rounded bg-gray-200 p-2 m-2'>
                <p className='text-red-500 font-bold text-md'>ID</p>
                <div className='flex items-center mt-3'>
                  <img style={{ borderRadius: '50%' }} width={'80px'} height={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDhO9kX7gMkypLyF6PE52dDfvyE-CD_9nlX27RozRG0907QWVDvNXX1mx&s=10" alt="image" />
                  <div className=' ms-5 flex flex-col w-full'>
                    <h4 className='text-blue '>Username</h4>
                    <p className='text-xs'>user@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminResource