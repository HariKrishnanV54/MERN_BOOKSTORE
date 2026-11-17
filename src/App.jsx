import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Contact from './user/pages/Contact'
import Books from './user/pages/Books'
import Profile from './user/pages/Profile'
import View from './user/pages/View'
import Auth from './pages/Auth'
import AdminDashBoard from './admin/pages/AdminDashBoard'
import AdminResource from './admin/pages/AdminResource'
import AdminSettings from './admin/pages/AdminSettings'
import { useState } from 'react'
import PreLoader from './components/PreLoader'

function App() {
  const [isloading,setLoading]=useState(true)

  setTimeout(() => {
    setLoading(false)
  },3000);
  return (
    <>
    <Routes>
      <Route path='/' element={isloading ?<PreLoader/> : <Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/books' element={<Books/>} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth/>} />

      <Route path='/profile/:id' element={<Profile/>} />
      <Route path='/books/:id' element={<View/>} />

      <Route path='/admin' element={<AdminDashBoard/>} />
      <Route path='/admin/resource' element={<AdminResource/>} />
      <Route path='/admin/settings' element={<AdminSettings/>} />



    </Routes>
    </>
  )
}

export default App
