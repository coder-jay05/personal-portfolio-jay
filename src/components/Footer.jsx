import React from 'react'
import { FaGithub, FaLinkedin,   } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>
                    JAYPRAKASH

                </h3>
                <p className='text-gray-400'>Full Stack Developer Based in India , Specializing in web development</p>
            </div>
            <div className='flex-1 w-full'>
                <form className='flex items-center justify-center'>
                    <input type='email' 
                    placeholder='Enter you Email ' className='w-full p-2 bg-gray-800 border-gray-600 rounded-l-lg focus:outline-none focus:border-green-400'>
                    </input>
                    <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 text-white  py-2 px-4  rounded-r-lg">Subscribe</button>
                </form>
            </div>
        </div> 

            <div className=' border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
           
            <p className='text-gray-400 '>&copy; {new Date().getFullYear()} JayPrakash .All Right Reserve</p>

            <div className=' flex space-x-4 my-4 md:my-0 '>
                <a href='https://github.com/coder-jay05' className='text-gray-400 hover:text-white'>
                
                <FaGithub />
                </a>
                <a href='https://linkedin.com/in/coder-jay05' className='text-gray-400 hover:text-white'>
                <FaLinkedin />

                </a>
                   
            </div>

            

            <div className=' flex space-x-4'>
                <a href='#' className='text-gray-400 hover:text-white'>
                    Privacy
                </a>
                <a href='#' className='text-gray-400 hover:text-white'>
                    Terms of Services 
                </a>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer