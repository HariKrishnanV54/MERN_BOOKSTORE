import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      <div>
        {/* Hero Section*/}
        <div style={{ height: "600px" }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover text-white'>
          <div style={{ height: "600px", backgroundColor: "rgba(0,0,0,0.6)" }} className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-6xl font-bold'>Wonderful Gifts</h1>
            <p>Gift your family and friends a book</p>
            <div className='mt-9 flex items-center'>
              <input type="text" placeholder='Search a Book' className='bg-white text-black rounded-3xl w-96 p-2' />
              <FaSearch className='text-gray-500 cursor-pointer' style={{ marginLeft: "-40px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* New Arrivals */}
      <section className='flex flex-col justify-center items-center p-5 my-5 m:px-40'>
        <h1 className='text-3xl font-bold'>New Arrivals</h1>
        <h1 className='text-3xl my-2'>Explore Our latest Collection</h1>
        <div className='md:grid grid-cols-4 w-full my-10'>

          <div className='shadoe rounded p-3 m-4 md:my-0'>
            <img width={'300px'} height={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCLuvLTiFsXXZPIPBzFp4-RQWsxqlM3uE0Ap3kqhsew&s=10' alt='Books' />
            <div className='flex flex-col justify-center items-center mt-4 text-center'>
              <h3 className='text-blue-500 font-bold text-xl'>Author</h3>
              <h4 className='text-lg font-bold'>Title</h4>
              <p className='font-bold text-red-500 mt-1'>$ 123</p>
            </div>
          </div>
        </div>
        <div className='my-10'>
          <Link to={'/books'} className='bg-black p-3 text-white rounded'>Explore More...</Link>
        </div>
      </section>
      {/* Autours section */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5  md:px-40'>
        <div className='text-center my-4'>
          <h2 className='font-bold text-xl'>FEATURED AUTHORS</h2>
          <h3 className='text-xl fonr-vold'>Capitvates with every word</h3>
          <p className='text-justify my-5'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers,
            showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
          <p className='text-justify my-4 '>Our Author Features include:</p>
          <p className='text-justify my-4'><span className='font-bold'>✨ Author Profiles : </span>Get to know each author through detailed profiles
            that highlight their biography, writing style, achievements, and personal inspirations.</p>
          <p className='text-justify my-4'><span className='font-bold'>📖 Published Works :</span> Explore a curated list of books written by the
            author with quick access to book details, reviews, and purchase options.</p>
          <p className='text-justify my-4'><span className='font-bold'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories,
            and writing tips that offer a deeper look into the author’s creative world.</p>
        </div>

        <div className='p-5 '>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHyw-QWGLXw5VROyTWTQX3nZloc2El5S0TMPCE818yg&s=10" alt="author" />
        </div>
      </section>

      {/* Textimonials */}
      <section className='flex flex-col justify-center items-center p-5 my-5 m:px-40'>
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-3xl my-2'>See What Others Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{ borderRadius: "50%" }} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" />
          <h3 className='my-5 font-bold '>Luther King</h3>
          <p className='text-justify text-gray-700 '>
            This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals,
            and beautifully organized categories. I appreciate how quickly customer support responds too.
          </p>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Home