import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiFiverr, SiUpwork } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='bg-[#045d90] dark:bg-[#55dbf6] py-8 text-white dark:text-black'>
        <div className='container mx-auto bg-tertiary'>
            <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
                <div className='flex space-x-4 items-center justify-center'>
                    <a href="mailto:diego.boost@gmail.com">
                        <HiOutlineMail size={30} className="cursor-pointer" />
                    </a>
                    <a href="https://github.com/diegoddie">
                        <FaGithub size={25} className="cursor-pointer" />
                    </a>
                    <a href="https://www.fiverr.com/diegoddie">
                        <SiFiverr size={35} className="cursor-pointer" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01021369935709b658">
                        <SiUpwork size={25} className="cursor-pointer" />
                    </a>                    
                </div>
                <div>
                    <h1 className='text-4xl font-signature cursor-pointer'>Diego Lauricella 🌎</h1>
                </div>
                <p>&copy; 2023 Diego Lauricella. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer