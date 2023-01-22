import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-[100vw] h-[270px] flex justify-center items-center bg-[#F7F7F7] relative overflow-hidden'>
        <Navbar/>
        <img className='absolute top-[79px]' src="/Maskgroup.png" alt="" />
    </div>
  )
}

export default Header