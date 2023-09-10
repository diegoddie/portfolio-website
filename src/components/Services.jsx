import React from 'react'
import { LuSettings } from 'react-icons/lu'
import { SiGoogleanalytics } from 'react-icons/si'
import { MdOutlineComputer } from 'react-icons/md'

const Services = () => {
  return (
    <div name="services" className="w-full md:h-screen text-[#0b171e] dark:text-[#e2fdf4] md:mt-20">
        <div className="max-w-[1000px] mx-auto sm:p-0 p-4 flex flex-col justify-center w-full h-full md:h-screen">
            <div className="sm:text-center pb-8 text-center">
                <p className="text-4xl font-bold inline border-b-4 border-[#045d90] dark:border-[#55dbf6]">Services</p>
                <p className="text-xl font-bold py-4">What I do for clients:</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8'>
                <div className='bg-[#b3d9ef] dark:bg-[#0c57ed] p-6 rounded-2xl'>
                    <div className='rounded-sm w-12 h-12 flex justify-center items-center mb-4 sm:mb-14 text-[22px]'>
                        <MdOutlineComputer size={40} className='text-[#c2410c]'/>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Web development</h4>
                    <p>
                        I can create complete web applications, handle both the backend and
                        frontend development, and implement dynamic and interactive features.
                    </p>
                </div>
                <div className='bg-[#b3d9ef] dark:bg-[#0c57ed] p-6 rounded-2xl'>
                    <div className='rounded-sm w-12 h-12 flex justify-center items-center mb-4 sm:mb-14 text-[22px]'>
                        <LuSettings size={35} className='text-[#1c1917] dark:text-white'/>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Blockchain Development</h4>
                    <p>
                        I can create smart contracts, implement decentralized business logic, and develop user interfaces to interact with DApps.
                    </p>
                </div>
                <div className='bg-[#b3d9ef] dark:bg-[#0c57ed] p-6 rounded-2xl'>
                    <div className='rounded-sm w-12 h-12 flex justify-center items-center mb-4 sm:mb-14 text-[22px]'>
                        <SiGoogleanalytics size={30} className='text-[#15803d] dark:text-[#59ce84]'/>
                    </div>
                    <h4 className='text-lg font-bold mb-2'>Performance Optimization and Data Analysis</h4>
                    <p>
                        I offer services for data analysis and performance optimization. I can help you
                        extract, clean, and analyze large datasets,
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services