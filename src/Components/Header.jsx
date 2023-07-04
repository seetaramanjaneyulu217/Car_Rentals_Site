import React from 'react'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <>
       <div className='bg-black p-3 flex justify-between items-center px-5'>
          <h1 className='text-white text-3xl'>CarRentals</h1>
          <FaUser className='text-white text-2xl'/>
       </div>
    </>
  )
}

export default Header