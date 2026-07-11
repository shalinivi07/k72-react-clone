import React from 'react'
import Video from '../components/home/Video'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeText from '../components/home/HomeText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='absolute right-2 bottom-35 max-w-[250px]'>
            <HomeText/>
        </div>
        <div className='h-screen w-screen relative flex flex-col items-center justify-between'>
            <HomeHeroText/>
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home
