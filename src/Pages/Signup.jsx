import React from 'react'
import { NavLink } from 'react-bootstrap'

const Signup = () => {
  return (
<>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full px-4 py-8 bg-white shadow rounded-lg">
      <h2 className="text-4xl font-semibold text-center mb-4 text-[#004743]">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input id="name" type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input id="email" type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input id="password" type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2" />
        </div>
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-700">
            Number
          </label>
          <input id="number" type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500 p-2" />
        </div>
        <div>
          <button type="submit" className="w-full bg-[#004743] text-white py-2 px-4 rounded-md hover:bg-[#133b39] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Sign Up
          </button>
        </div>
      </form>
      <p className='flex gap-3 justify-center pt-3' >Already have an account ? <NavLink>Sign in</NavLink></p>
    </div>
  </div>
  </>
  )
}

export default Signup