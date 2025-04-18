import React from 'react'

const About = () => {
  return (


    <div className='bg-black text-white py-20 ' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>

        <h1 className='text-4xl font-bold text-center mb-12'>About Me </h1>


{/* Content and Image Div */}
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src='/src/assets/hero-image.jpeg' className='w-72 h-80 rounded object-cover mb-8 md:mb-0' ></img>

       <div className='flex-1'>
            <p className='text-lg mb-8'>Hi, I'm Jayprakash, a passionate MERN Stack Developer skilled in building responsive and scalable web applications using MongoDB, Express.js, React.js, and Node.js. I’ve worked on several real-world projects like a Course-Selling App, Personal Portfolio, and a To-Do App with Login & Authentication.

I’ve also delivered both custom and pre-built projects for final-year college students. Currently, I'm interning at Pantech Prolabs and exploring Web3 integration with the MERN stack. From frontend with React & Tailwind CSS to backend with Node & Express, I love crafting clean, user-friendly solutions and always look forward to learning and building more..</p>

            <div className='space-y-4'>
            <h2 className='text-4xl font-bold text-center mb-12 '>Technical Skills </h2>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'> HTML & CSS</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-18/20'>

                </div>

              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12 '>JavaScript</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-16/20'>

                </div>

              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'> react.js</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-16/20'>

                </div>

              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'>Node.js</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-15/20'>

                </div>

              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-2/12'>Express.js</label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-15/20'>

                </div>

              </div>
            </div>
          </div>

        </div>
            
        </div>


{/* Experience and Project Div */}
        <div className='mt-12 flex justify-between text-center'>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              6+
            </h3>
            <p>Month Experience</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              10+
            </h3>
            <p>Project Completed </p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              50+
            </h3>
            <p>Happy Client</p>
          </div>
          
        </div>

        </div>
    </div>
  )
}

export default About