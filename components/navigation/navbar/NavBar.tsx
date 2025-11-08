import React from 'react'
import { FiBell, FiMessageSquare } from 'react-icons/fi'

const NavBar = () => {
  return (
    <div className='flex justify-between w-full px-6 my-4 fixed z-50'>
        <div>DevConnect</div>
        <div>Search</div>
        <div className='flex gap-4 items-center'>
            <FiMessageSquare className='text-2xl' />
            <FiBell className='text-2xl' />
            <div className='rounded-full bg-green-50 w-12 h-12 flex justify-center items-center  '>PR</div>

        </div>
    </div>
  )
}

export default NavBar