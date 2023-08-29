import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          setTheme(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
    }, []);

    useEffect(() =>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='sm:fixed w-full h-[80px] flex justify-between items-center px-4 text-[#0b171e] dark:text-[#e2fdf4]'>
            <div>
                <h1 className='text-5xl font-signature cursor-pointer'>Diego Lauricella</h1>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link to="portfolio" smooth={true} duration={500}>
                        Portfolio
                    </Link>
                </li>
                <li className='font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link to="services" smooth={true} duration={500}>
                        Services
                    </Link>
                </li>
                <li className='font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link to="contacts" smooth={true} duration={500}>
                        Contacts
                    </Link>
                </li>
            </ul>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#06a0f9] dark:bg-[#02102c] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About me
                    </Link>
                </li>
                <li className='py-6 text-4xl font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
                        Portfolio
                    </Link>
                </li>
                <li className='py-6 text-4xl font-bold transition duration-150 border-b-4 border-transparent hover:border-[#045d90] dark:hover:border-[#0c57ed]'>
                    <Link onClick={handleClick} to="contacts" smooth={true} duration={500}>
                        Contacts
                    </Link>
                </li>
            </ul>

            {/* Theme Switch */}
            <div className="md:flex items-center">
                {theme === 'dark' ? (
                    <MoonIcon className="h-7 w-7 cursor-pointer text-white" onClick={handleThemeSwitch} />
                ) : (
                    <SunIcon className="h-8 w-8 cursor-pointer text-yellow-500" onClick={handleThemeSwitch} />
                )}
            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <MenuIcon className="h-6 w-6" /> : <XIcon className="h-6 w-6" /> }
            </div>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-600'>
                        <a href="https://www.fiverr.com/diegoddie" className='flex justify-between items-center w-full text-gray-300'>
                            Fiverr <SiFiverr size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-lime-900'>
                        <a href="https://www.upwork.com/freelancers/~01021369935709b658" className='flex justify-between items-center w-full text-gray-300'>
                            Upwork <SiUpwork size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/diegoddie" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-600'>
                        <a href="mailto:diego.boost@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar