import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import foto2 from '../assets/foto2.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="hero" className='w-full h-screen text-[#0b171e] dark:text-[#e2fdf4]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex flex-col justify-center items-center h-full md:mt-20'>
                <div className='sm:flex items-center flex-wrap mb-2'>
                    <div className='sm:mr-4 mb-5 sm:mb-0'>
                        <img src={foto2} alt='Hero' className='rounded-full  w-24 h-24 md:w-32 md:h-32 border-[4px] border-[#06a0f9] dark:border-[#0c57ed] object-contain' />
                    </div>
                    <div>
                        <p className='text-3xl sm:text-7xl font-bold'>Hi!👋</p>
                    </div>
                </div>
                <h1 className='text-2xl sm:text-7xl font-bold mb-2'>I'm Diego Lauricella,</h1>
                <h2 className='text-2xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#06a0f9] to-[#b3d9ef] dark:from-[#0c57ed] dark:to-[#55dbf6]'>a Full Stack Developer.</h2>
                <div className='mt-2'>
                    <button className='text-white bg-[#045d90] dark:text-black dark:bg-[#55dbf6] rounded-xl group border-2 px-6 py-3 my-2 flex items-center hover:shadow-xl dark:hover:shadow-md border-transparent dark:hover:shadow-[#0c57ed]'>
                        <Link to="portfolio" smooth={true} duration={500}>
                            Portfolio
                        </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero