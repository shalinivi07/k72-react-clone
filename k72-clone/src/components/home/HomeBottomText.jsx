import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex gap-4 items-center justify-center'>
        <div >
            <Link className='text-[6.5vw] leading-[7vw] border-2 border-white hover:border-[#D3FD50] 
            hover:text-[#D3FD50] rounded-full px-6 pt-1 uppercase ' to={'/agence'}>Agency</Link>
        </div>
        <div>
            <Link className='text-[6.5vw] leading-[7vw] border-2 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-5 pt-1 uppercase ' to={'/projects'}>Projects</Link>
        </div>
    </div>
  )
}

export default HomeBottomText
