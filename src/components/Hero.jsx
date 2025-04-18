import React from 'react'
import Resume from "../assets/docs/JayPrakash Resume pan.pdf"
import image from "../assets/title.jpeg"

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 ' id='home'>
      
      <img src={image} alt='' className='mx-auto mb-8 w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105'></img>

      <h1 className='text-4xl font-bold'> I'm {" "} 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>JayPrakash Mahato</span>
       , MERN Stack Developer 
      </h1>

      <p className='mt-4 text-lg text-gray-300 '>I Specialize in Building Modern And Responsive Web Applications. </p>

      <div className='mt-8 space-x-4 '>
        <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500   py-2 px-4 rounded-full hover:scale-105 text-white hidden md:inline' >Contact me</a>
        <a href={Resume}  download="jay_resume.pdf" className='bg-gradient-to-r from-pink-500 to-yellow-500   py-2 px-4 rounded-full hover:scale-105 text-white hidden md:inline' >Resume</a>
      </div>
    </div>
  )
}

export default Hero