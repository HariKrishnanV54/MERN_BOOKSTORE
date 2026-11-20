import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaBackward, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
    <div className='border shadow border-gray-200 p-5'>
      {/* Grid */}
    <div className='md:grid grid-cols-4 gap-x-10'>
    {/* image */}
    <div className='col-span-1'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDtIKjKLaNxq0UQ7jbTA1Friqh0pYcmEnoK73krelCg&s=10" alt=" view book" />
    
    </div>
    <div className='col-span-3'>
    <div className='flex justify-between'>
      <h3 className='font-bold text-2xl'>title </h3>
      <button className='text-gray'><FaEye/></button>
    </div>
    <h2 className='font-bold text-blue-800 mt-2'>Author</h2>
    <div className='md:grid grid-cols-3 gap-10 my-10'>
      <p className='font-bold'>Publisher:</p>
      <p className='font-bold'>Language:</p>
      <p className='font-bold'>No.of pages:</p>
      <p className='font-bold'>Cateogory:</p>
      <p className='font-bold'>ISBN:</p>
      <p className='font-bold'>Original Price:</p>
      <p className='font-bold'>Seller:</p>

    </div>
    <div className='my-4 md:my-10'>
      <h4 className='font-bold text-2xl'>Abstract</h4>
      </div>
      <div className='flex justify-end' >
        <Link to={'/books'} className='bg-blue-900 text-white p-2 font-bold flex items-center rounded' ><FaBackward className='me-2'/>Back</Link>
        <button className='bg-green-900 p-2 text-white font-bold ms-3 rounded'>Buy $67</button>
      </div>
    </div>
    </div>
    </div>
    {/* Modal */}
    <div className='relative z-10 overflow-y-auto '>
    <div className='bg-gray-500/75 fixed inset-0 '>
    <div className='flex justify-center items-center min-h-screen'>
    <div className='bg-white rounded-2xl w-100 md:w-250'>
      {/* Modal title */}
    <div className='bg-black text-white p-3'>
      <h2>Book Images</h2>
    </div>
    {/* modal Body */}
    
    </div>
    </div>
    </div>
    </div>
    </div>
      <Footer/>
    </>
  )
}

export default View
