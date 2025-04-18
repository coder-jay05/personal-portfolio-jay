import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      
       <nav className="bg-black text-white px-8  md:px-16 lg:px-24">

       <div className="container py-2 flex justify-center md:justify-between items-center">

          <div className="text-2xl font-bold hidden md:inline">JAYPRAKASH</div>

          <div className="space-x-6">
            <a href="#home"className="hover:text-gray-400">Home</a>
            <a href="#about"className="hover:text-gray-400">About Me</a>
            <a href="#services"className="hover:text-gray-400">Services</a>
            <a href="#projects"className="hover:text-gray-400">Projects</a>
            <a href="#contact"className="hover:text-gray-400">Contact</a>
          </div>

        <div className=' flex space-x-4 my-4 md:my-0 '>
                        <a href='https://github.com/coder-jay05' className='text-gray-400 hover:text-white text-2xl'>
                        
                        <FaGithub />
                        </a>
                        <a href='https://linkedin.com/in/coder-jay05' className='text-gray-400 hover:text-white text-2xl bg-gradient-to-r from-blue-900 to-blue-600'>
                        <FaLinkedin />
        
                        </a>
                           
                    </div>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 tect-white  md:inline py-2 px-4 hover:scale-105 transform transition-transform hidden duration-300 rounded-full">Connect Me</button>
          
        </div>


       </nav>
      
    </>
  );
};

export default Navbar;
