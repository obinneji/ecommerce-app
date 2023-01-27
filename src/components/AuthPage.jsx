import React from 'react'
import { useContext, useState } from 'react'
import { LoginContext } from '../contexts/LoginContext'
import { app } from '../auth/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const AuthPage = () => {
  const auth = getAuth()
  const { setEmail, setPassword, setFirstName, setLastName, email, password, setIsLogin, isLogin } = useContext(LoginContext)
  const [errorMessage, setErrorMessage] = useState("")
  const handleCreate = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then
      ((response) => {
        console.log(response.user)
        setIsLogin(true)
        setErrorMessage("")

      }).catch((err) => {
        setErrorMessage(err.message)
        console.log(err.message)
      }
      )

    signInWithEmailAndPassword(auth, email, password).then
      ((response) => {
        console.log(response)
        console.log(isLogin)
      }).catch((err) => { console.log(err.message) })
  }
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password).then
      ((response) => {
        console.log(response)
        console.log(isLogin)
        setIsLogin(true)

      }).catch((err) => { console.log(err.message) })

  }
  return (
    <div className='font-poppins'>
      <div>
        <h2 className='text-2xl text-blue font-extrabold mt-4 px-5'>Create A BUYNOW Account</h2>
        <form className='pb-5'>
          <div className='grid gap-6 mb-6 md:grid-cols-2  px-5 mt-5'>
            <div>
              <label htmlFor='First_name' className=' block text-lg block mb-2 text-sm font-medium text-gray-900 text-black'>First Name</label>
              <input type='text' id="First_name" placeholder='firstname' onChange={(e) => { setFirstName(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div>
              <label htmlFor='Last_name' className='  block text-lg block mb-2 text-sm font-medium text-gray-900 text-black'>Last Name</label>
              <input type='text' id="Last_name" placeholder='last name' onChange={(e) => { setLastName(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div>
              <label htmlFor='email' className='  block text-lg block mb-2 text-sm font-medium text-gray-900 text-black'>Email</label>
              <input type='email' id='email' placeholder='email' onChange={(e) => { setEmail(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div>
              <label htmlFor='Password' className='  block text-lg block mb-2 text-sm font-medium text-gray-900 text-black'>Password</label>
              <input type='text' id='Password' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-red italic'>{errorMessage}</p>
            <button onClick={handleCreate} className='bg-blue px-5 py-3 text-center mt-3 rounded-lg text-white font-poppins w-6/12'>Create account</button>
          </div>
        </form>
      </div>
      <div>
        <h3 className='text-2xl text-blue font-extrabold mt-4 px-5'>Login</h3>
        <div>
          <div className='grid gap-6 mb-6 md:grid-cols-2  px-5 mt-5'>
            <div>
              <label htmlFor='email' className='  block text-lg block mb-2 text-sm font-medium text-gray-900 text-black'>Email</label>
              <input type='email' id='email' placeholder='email' onChange={(e) => { setEmail(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div>
              <label htmlFor='Password' className='  block text-lg block mb-2 text-sm font-medium text-gray-900 text-black'>Password</label>
              <input type='text' id='Password' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-red italic'>{errorMessage}</p>
            <button onClick={handleLogin} className='bg-blue px-5 py-3 text-center mt-3 mb-4 rounded-lg text-white font-poppins w-6/12'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage