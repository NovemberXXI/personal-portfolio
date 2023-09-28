import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-auto bg-gradient-to-b from-sky-900 via-sky-900 to-orange-800 text-gray-200 pt-12'>
        {/* conta */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='pb-8 pt-10 pl-4'>
                <p className='text-4xl py-2 font-bold inline border-b-4 border-white'>Hello, My Name Is</p>
            </div>  


            <h1 className='text-5xl sm:text-7xl py-2 font-bold text-[#ccd6f6] ml-10'>Edmond Setati</h1>
            <h2 className='text-4xl sm:text-7xl text-[#8892b0] ml-10'>I'm a Front-end web Developer.</h2>
            <p className='text-gray-300 text-xl py-4 max-w-[600px] ml-10'>I am driven by curiosity and armed with a solid foundation in HTML, CSS, and JavaScript, I am also eager to apply my knowledge and creativity to build impactful web experiences. While still in the early stages of my web development career, I am enthusiasm and dedication shine through in every project.</p>

            <div>
              <Link  to="projects"  smooth={true}  duration={500} >
                
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-gradient-to-r from-sky-500 to-orange-700'>My Work    
                  <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
                </button>
              </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Home