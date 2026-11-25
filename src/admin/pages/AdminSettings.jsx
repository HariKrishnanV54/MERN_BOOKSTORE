import React from 'react'
import Footer from '../../user/components/Footer'
import AdminHeader from  "../components/AdminHeader"
import AdminSideBar from "../components/AdminSideBar"
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
   <>
      <AdminHeader/>
            <div className='md:grid grid-cols-5'>
              {/* 1st section - 1 grid */}
              <div className='col-span-1'>
                <AdminSideBar />
              </div>
              {/* 2nd section -4 grid */}
              <div className='col-span-4 p-10'>
              <h1 className='text-3xl font-bold text-center mb-10'>Settings</h1>
              <div className='md:grid grid-cols-2 items-center'>
                {/* 1st section */}
                <div>
                <h2 className='text-2xl font-bold mb-10'>Welcome, Admin 👋</h2>
                <p className='text-justify '>This is your personal administration space where you can manage your account details, 
                  system preferences, and platform roles with ease. From here, you can update essential information such as your username,
                   password, contact details, and notification preferences — ensuring your access remains secure and personalized.
                </p>
                <h4 className='my-5 font-bold text-lg'>🔧 What You Can Manage in This Section:</h4>
                <ul>
                  <li>✏️ Update personal details (name, email, role, profile picture)</li>
                  <li>🔐 Change or reset your password</li>
                  <li>📢 Configure notification and alert preferences</li>
                  <li>👥 Manage permissions based on assigned access level</li>
                  <li>🧩 Customize dashboard visibility and layout</li>
                </ul>
                <p className='text-justify my-10'>
                  Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, 
                  and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, 
                  and improving the system — one step at a time. 🚀📚
                </p>
                </div>
                {/* 2nd section */}
                 <div className='bg-blue-100 p-5 flex flex-col justify-center items-center my-5 w-full'>
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
            
                              
                                {/* reset update */}
                                <div className='flex justify-end w-full mt-3'>
                                  <button type="button" className='bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-1 rounded cursor-pointer'>RESET</button>
                                  <button type="button" className='bg-green-600 hover:bg-green-700 text-white px-5 py-1 rounded ms-3 cursor-pointer'>UPDATE</button>
                                </div>
                             
                            </div>
                
              </div>
              </div>
            </div>
        <Footer/>
   </>
  )
}

export default AdminSettings
