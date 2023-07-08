import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-sky-900 via-sky-900 to-orange-800 text-gray-200'>
        {/* conta */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>Hello</p>
            </div>  


            <h1 className='text-5xl sm:text-7xl py-2 font-bold text-[#ccd6f6] ml-10'>Edmond Setati</h1>
            <h2 className='text-4xl sm:text-7xl text-[#8892b0] ml-10'>I'm a Front-end web Developer.</h2>
            <p className='text-black text-xl py-4 max-w-[600px] ml-10'>I am driven by curiosity and armed with a solid foundation in HTML, CSS, and JavaScript, I am also eager to apply my knowledge and creativity to build impactful web experiences. While still in the early stages of my web development career, I am enthusiasm and dedication shine through in every project.</p>

            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-orange-700'>My Work 
                <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home