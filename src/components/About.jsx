import React from 'react';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { GiPositionMarker } from 'react-icons/gi';
import { MdOutlineComputer } from 'react-icons/md'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-[#0b171e] dark:text-[#e2fdf4]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full gap-8'>
                <div className='sm:text-center pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#045d90] dark:border-[#55dbf6]'>
                        About
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full sm:h-[35%] grid sm:grid-cols-2 gap-8 px-4 py-2 bg-[#b3d9ef] dark:bg-[#121b2b]'>
                <div className='grid grid-cols-1 gap-8 px-4 items-center'>
                    <div className='flex flex-col items-center font-bold'>
                        <div className='flex sm:justify-end justify-center items-center my-2'>
                            <LiaBirthdayCakeSolid size={50} className='text-[#d23b8b]'/>
                            <p className='text-2xl ml-2'>25 Years Old</p>
                        </div>
                        <div className='flex sm:justify-end justify-center items-center my-2'>
                            <GiPositionMarker size={45} className='text-[#40ab1f]'/>
                            <p className='text-2xl ml-2'>Brescia, Italy</p>
                        </div>
                        <div className='flex sm:justify-end justify-center items-center my-2'>
                            <MdOutlineComputer size={45} className='text-[#c5690d]'/>
                            <p className='text-2xl ml-2'>Full Stack</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <p className=''>
                        🚀 I began programming in late 2021, starting with <span className='font-bold'>Python</span> and then expanding my expertise with other languages and libraries like the <span className='font-bold'>MERN stack.</span> <br/><br/>🌎 Currently, I am attending the <span className='font-bold'>Full Stack Development master's program at Start2Impact</span>, an Italian B-Corp company that prioritizes new sustainable and regenerative models.<br/><br/>⛓️ I have also a strong interest in <span className='font-bold'>blockchain technology</span> and its transformative potential. In July 2023, I obtained the <span className='font-bold'>Ethereum Developer Certification</span> after attending Alchemy University's bootcamp.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
