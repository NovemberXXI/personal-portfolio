import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-sky-900 to-orange-800 flex justify-center items-center p-4'>
        <form action="https://getform.io/f/d9749e2c-5b49-4926-8dcf-d2bc15a76391" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-200'>Contact Me</p>
                <p className='text-gray-300 py-4 text-xl'>Submit the form to get in contact.</p>
            </div>
            <input className='text-center bg-gray-200 p-2 focus:outline-none' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-gray-200 text-center focus:outline-none' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-200 p-2 focus:outline-none' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-gray-100 border-2 hover:bg-gradient-to-r from-sky-700 to-orange-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Submit to get in touch</button>
        </form>
    </div>
  )
}

export default Contact