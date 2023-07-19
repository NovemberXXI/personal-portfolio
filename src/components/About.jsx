import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-auto py-20 bg-gradient-to-b from-orange-800 to-sky-900 text-gray-100'>
        <div className='justify-center px-8 items-center w-full h-full md:px-20'>

          <div className='py-8 pl-4 pt-10 '>
              <p className='text-4xl py-2 font-bold inline border-b-4 border-white'>About Me</p>
          </div>   

          <p className='text-xl rounded-lg mx-auto mt-14 md:ml-20 max-w-[700px] ml-16 hover:scale-105 duration-500'>
            Since I have started with my Software Development journey, 
            I have created multiple websites and apps including 
            <span className="text-lg text-blue-500"> Weather</span> App, <span className="text-lg text-green-500"> 
            E-Comm</span> Template using my  
            <span className="text-orange-500"> HTML</span>, <span className="text-blue-700">CSS</span> and <span className="text-yellow-300">JavaScript</span> skill 
            and recently started learning <span className='text-blue-400'>React</span>  and <span className='text-blue-700'>Tailwind CSS</span>.
            I am also looking to collaborate with talented people to create big or small digital products to keep improving my skills.
          </p>
        </div>
    </div>
  )
}

export default About