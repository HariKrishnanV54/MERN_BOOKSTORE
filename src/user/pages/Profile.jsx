import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'

function Profile() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <Header />
      <div className='bg-black ' style={{ height: '200px' }}>
      </div>
      <div className='bg-white p-3' style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '75px', marginTop: '-130px' }}>
        <img className='bg-white ' style={{ height: '200px', width: '200px', borderRadius: '50%', marginLeft: '3px', marginTop: '-1px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBDhO9kX7gMkypLyF6PE52dDfvyE-CD_9nlX27RozRG0907QWVDvNXX1mx&s=10" alt="user" />
      </div>
      <div className='flex justify-between px-20 mt-5'>
        <div className='flex items-center '>
          <h1 className='font-bold md:text-3xl text-2xl'>Peter parker</h1>
          <FaCircleCheck className='text-blue-500 ms-3' />
        </div>
        <button><Edit /></button>
      </div>
      <div className='px-20 mt-3 mb-5'>
        <p className='text-justify px-0 mt-3 mb-5 font-bold'>Bio</p>
        <p className='text-justify'>Orphaned at a young age, Peter was raised in Forest Hills, Queens, by his Aunt May and Uncle Ben.
          A brilliant but socially awkward high school student with a deep passion for science, his life changed forever when he was bitten by a
          radioactive spider during a science demonstration.   Initially using his newfound abilities for personal gain, Peter learned a devastating
          lesson when a burglar he failed to stop later murdered his Uncle Ben. Guided by the principle that "with great power comes great
          responsibility," he dedicated his life to fighting crime as Spider-Man.   </p>
      </div>

      <div className='flex justify-center items-center p-4 my-8 font-semibold text-lg'>
        <p onClick={() => (setCurrentTab(1))} className={currentTab == 1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' :
          'p-4 border-gray-200 border-b rounded cursor-pointer'}> Upload Book</p>
        <p onClick={() => (setCurrentTab(2))} className={currentTab == 2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' :
          'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
        <p onClick={() => (setCurrentTab(3))} className={currentTab == 3 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' :
          'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
      </div>

      {currentTab == 1 &&
        <div>

          Upload Books

        </div>
      }


      {currentTab == 2 &&
        <div>

          Upload Book Status

        </div>
      }


      {currentTab == 3 &&
        <div>

          Purchase History

        </div>
      }
      <Footer />
    </>
  )
}

export default Profile