import React from 'react'
import Html from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import CSS from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-orange-800 to-sky-900 text-gray-200'>
        {/* cont */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4'>Tech Stack</p>
                <p className='py-4'>These are the technologies I have been using to build my projects.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 '>
                <div className='shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-500'>
                    <img src={Html} alt="html icon" className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-blue-500 rounded-xl hover:scale-105 duration-500'>
                    <img src={CSS} alt="html icon" className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-yellow-500 rounded-xl hover:scale-105 duration-500'>
                    <img src={JavaScript} alt="html icon" className='w-20 mx-auto' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-sky-500 rounded-xl  hover:scale-105 duration-500'>
                    <img src={ReactImg} alt="html icon" className='w-20 mx-auto' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-sky-800 rounded-xl  hover:scale-105 duration-500'>
                    <img src={Tailwind} alt="html icon" className='w-20 mx-auto' />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-gray-800 rounded-xl  hover:scale-105 duration-500'>
                    <img src={Github} alt="html icon" className='w-20 mx-auto' />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills