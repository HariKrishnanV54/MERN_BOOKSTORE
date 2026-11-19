import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({ insideRegister }) {

  const [togglePasswordType, setTogglePasswordType] = useState(false)
  return (
    <div className='relative w-full min-h-screen flex justify-center items-center bg-[url("/landing.png")] bg-cover bg-center text-white px-4'>
      <div className='absolute inset-0 bg-black/60 backdrop-blur-[2px]'></div>

      <div className='relative z-10 w-full max-w-[420px] py-8'>
        <h1 className='font-bold text-3xl sm:text-4xl text-center tracking-wide drop-shadow-md'>Book Store</h1>

        <div className='w-full bg-black/80 backdrop-blur-md border border-white/15 text-white p-7 sm:p-8 rounded-2xl shadow-2xl flex justify-center items-center flex-col my-5'>
          <div className='w-20 h-20 rounded-full border-2 border-white/30 bg-white/10 mb-4 flex justify-center items-center shadow-inner'>
            <FaUser className='text-3xl text-white/90' />
          </div>

          <h1 className='text-2xl font-semibold tracking-tight'>{insideRegister ? "Register" : "Login"}</h1>

          <form className='w-full mt-6 space-y-4'>
            {/* Username */}
            {
              insideRegister &&
              <input
                type="text"
                placeholder='username'
                className='bg-white/95 text-gray-900 placeholder-gray-500 px-3.5 py-2.5 w-full rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition'
              />
            }

            {/* Email */}
            <input
              type="email"
              placeholder='E mail'
              className='bg-white/95 text-gray-900 placeholder-gray-500 px-3.5 py-2.5 w-full rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition'
            />

            {/* Password */}
            <div className='relative flex items-center'>
              <input
                type={togglePasswordType ? "text" : "password"}
                placeholder='password'
                className='bg-white/95 text-gray-900 placeholder-gray-500 px-3.5 py-2.5 pr-10 w-full rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition'
              />
              {
                togglePasswordType ?
                  <FaEyeSlash
                    onClick={() => setTogglePasswordType(!togglePasswordType)}
                    className='absolute right-3.5 text-gray-500 hover:text-gray-800 cursor-pointer transition'
                  />
                  :
                  <FaEye
                    onClick={() => setTogglePasswordType(!togglePasswordType)}
                    className='absolute right-3.5 text-gray-500 hover:text-gray-800 cursor-pointer transition'
                  />
              }
            </div>

            <div className='flex justify-between items-center gap-2 pt-1'>
              {/* forget password */}
              <p className='text-xs text-amber-300/90'>"Never share your password with others"</p>
              {!insideRegister &&
                <button type="button" className='text-xs text-gray-300 hover:text-white underline whitespace-nowrap transition cursor-pointer'>
                  Forget Password
                </button>
              }
            </div>

            {/* login/register button */}
            <div className='pt-2 text-center'>
              {
                insideRegister ?
                  <button className='bg-green-700 hover:bg-green-600 active:scale-[0.99] text-white font-semibold w-full py-2.5 rounded-lg shadow-md transition cursor-pointer'>
                    Register
                  </button>
                  :
                  <button className='bg-green-700 hover:bg-green-600 active:scale-[0.99] text-white font-semibold w-full py-2.5 rounded-lg shadow-md transition cursor-pointer'>
                    Login
                  </button>
              }
            </div>

            {/* Google Authentication */}
            {
              !insideRegister &&
              <div className='text-center pt-2'>
                <div className='flex items-center gap-3 text-gray-400 text-sm'>
                  <span className='flex-1 h-px bg-white/20'></span>
                  <span>or</span>
                  <span className='flex-1 h-px bg-white/20'></span>
                </div>
                <div className='flex justify-center items-center w-full mt-3 py-2.5 px-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-sm font-medium transition cursor-pointer'>
                  Google Authentication
                </div>
              </div>
            }

            {/* new or already user */}
            <div className='text-center pt-2 text-sm'>
              {
                insideRegister ?
                  <p className='text-gray-300'>Existing User ?<Link to={'/login'} className='ms-2 text-blue-400 hover:text-blue-300 font-medium underline transition'>Login</Link></p>
                  :
                  <p className='text-gray-300'>New User <Link to={'/register'} className='ms-2 text-blue-400 hover:text-blue-300 font-medium underline transition'>Register</Link></p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth