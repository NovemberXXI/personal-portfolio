import React from 'react'
import EcommReac from '../assets/ECommReac.png'
import Calculater from '../assets/Calculater.png'
import WeatherApp from '../assets/WeatherApp.png'
import ECommerceTemplate from '../assets/ECommerceTemplate.png'

const Mywork = () => {
  return (
    <div name='projects' className='w-full h-auto text-gray-100 bg-gradient-to-b from-sky-900 to-orange-800'>
        <div className='max-w-[1000px] px-10 mx-auto pt-20 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 py-2 text-gray-100'>My Work</p>
                <p className='py-6 text-xl'>Checkout Projects I Have Built.</p>
            </div>


            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

                {/* grid */}
                <div style={{backgroundImage: `url(${EcommReac})` }} className='shadow-lg shadow-orange-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hovEffect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white'>
                            E-Commerce React Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://edmond-setati-e-commerce-website.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/NovemberXXI/e-comm-react">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WeatherApp})` }} className='shadow-lg shadow-orange-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hovEffect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://edmond-setat-weather-app.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/NovemberXXI/MyWeatherAPP">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid */}
                <div style={{backgroundImage: `url(${Calculater})` }} className='shadow-lg shadow-orange-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hovEffect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calculator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://edmond-calculater.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/NovemberXXI/My-Calculator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ECommerceTemplate})` }} className='shadow-lg shadow-orange-600 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hovEffect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            E-Commerce Template
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://edmond-ecommerce-template.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/NovemberXXI/E-Commerce-template">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-900 text-gray-200 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mywork