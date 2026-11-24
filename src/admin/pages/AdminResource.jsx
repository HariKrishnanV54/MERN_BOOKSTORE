import React from 'react'
import Footer from '../../user/components/Footer'
import AdminHeader from  "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"

function AdminResource() {
  return (
   <>
     <AdminHeader/>
        <div className='md:grid grid-cols-5'>
          {/* 1st section - 1 grid */}
          <div className='col-span-1'>
            <AdminSideBar />
          </div>
          {/* 2nd section -4 grid */}
          <div className='col-span-4'>
          Admin Collections
          </div>
        </div>
        <Footer/>
   </>
  )
}

export default AdminResource
