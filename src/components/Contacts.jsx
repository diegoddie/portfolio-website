import React from 'react'

const Contacts = () => {
  return (
    <div name="contacts" className="w-full h-screen text-[#0b171e] dark:text-[#e2fdf4] flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/738b26d7-4f61-4f29-8912-4afc85e6511e" className='flex flex-col max-w-[600px] w-full'>
            <div className="sm:text-center pb-8 text-center">
                <p className="text-4xl font-bold inline border-b-4 border-[#045d90] dark:border-[#55dbf6]">Contacts</p>
                <p className="text-xl font-bold py-4">Submit the form below or shoot me an email - diego.boost@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='p-2 bg-[#b3d9ef] placeholder-[#0b171e] rounded-xl'/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#b3d9ef] placeholder-[#0b171e] rounded-xl' />
            <textarea name="message" rows="10" placeholder='Message' className='p-2 bg-[#b3d9ef] placeholder-[#0b171e] rounded-xl'></textarea>
            <button className="dark:text-black dark:bg-[#55dbf6] dark:border-transparent px-4 py-3 my-8 mx-auto flex items-center dark:hover:shadow-md dark:hover:shadow-[#0c57ed] hover:shadow-xl bg-[#045d90] text-white rounded-xl">Send a message!</button>
        </form>
    </div>
  )
}

export default Contacts