import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

const NavBar = () => {
  return (
    <div className='flex justify-between w-full px-6 my-4 fixed z-50'>
        <div>DevConnect</div>
        <div>Search</div>
        <div className='flex gap-4 items-center'>
            <FaMessage className='text-2xl' />
            <FaBell className='text-2xl' />
            <div className='rounded-full bg-green-50 w-12 h-12 flex justify-center items-center  '>PR</div>

        </div>
    </div>
  )
}

export default NavBar