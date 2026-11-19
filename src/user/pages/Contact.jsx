import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaLocationDot } from "react-icons/fa6"
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat debitis consectetur et distinctio sit exercitationem eligendi iusto, similique ex,
          soluta, corrupti eos quae inventore fuga vel provident numquam obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda consequatur necessitatibus enim autem facilis aspernatur optio veritatis
          accusamus nemo, voluptatibus quaerat in doloremque possimus et alias exercitationem laudantium beatae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quos eius, repellendus saepe dicta totam ipsam, necessitatibus
          doloribus fugit cum sapiente impedit a laboriosam beatae non quod itaque numquam Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corrupti praesentium dolor ex laudantium aliquid ratione veniam corporis, tempora sit eius reprehenderit harum magnam accusantium voluptatibus qui modi in perferendis blanditiis.</p>

        {/* Grid-addres Number Email */}
        <div className='md:grid grid-cols-3 gap-5 items-center mt-5 p-5 md:px-40 md:mt-0'>
          {/* Location */}
          <div className='flex items-center gap-3 my-3 md:my-0'>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%" }} className='flex items-center justify-center bg-gray-300 shrink-0'>
              <FaLocationDot />
            </div>
            <p>123 Main Street, Apt 48, Anytown, CA 91244</p>
          </div>
          {/* Number */}
          <div className='flex items-center gap-3 my-3 md:my-0'>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%" }} className='flex items-center justify-center bg-gray-300 shrink-0'>
              <FaPhone />
            </div>
            <p>959464451</p>
          </div>
          {/* Email */}
          <div className='flex items-center gap-3 my-3 md:my-0'>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%" }} className='flex items-center justify-center bg-gray-300 shrink-0'>
              <FaEnvelope />
            </div>
            <p>bookstore@gmail.com</p>
          </div>


        </div>
        {/* Message and Map */}
        <div className='md:grid grid-cols-2 gap-20 my-5 p-5 md:px-40'>
          {/* Message */}
          <div className='bg-gray-300 text-center p-5 '>
            <h1 className='font-semi-bold text-2xl ' >Send Us Message</h1>
            <form >
              <div className='mb-5 mt-5'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2' />
              </div>

              <div className='mb-5 mt-5'>
                <input type="email" placeholder='E-Mail' className='bg-white w-full p-2' />
              </div>

              <div className='mb-5 mt-5'>
                <textarea type="text" placeholder='Message' className='bg-white w-full p-2' />
              </div>

              <div className='mb-5 mt-10'>
                <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submite<FaPaperPlane className='ms-2' /></button>
              </div>


            </form>

          </div>
          {/* Map */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.97521744499!2d76.3426426!3d10.018903600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065806225!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact