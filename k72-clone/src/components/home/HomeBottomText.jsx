import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex gap-2 items-center justify-center'>
        <div className='hover:border-[#D3FD50] hover:[#D3FD50]'>
            <Link className='text-[6.5vw] leading-[7vw] border-3 border-white rounded-full px-5 pt-1 uppercase '>Agence</Link>
        </div>
        <div className='hover:border-[#D3FD50] hover:text-[#D3FD50]'>
            <Link className='text-[6.5vw] leading-[7vw] border-3 border-white rounded-full px-5 pt-1 uppercase '>Projects</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
