import React from 'react'
import courseimg from "../assets/course selling app.png"
import portfolio from "../assets/portfolio.png"

const Projects = () => {

    const project = [

        {
            id:1,
            name:"Course Selling App ",
            technology:" MERN STACK ",
            image:courseimg,
            github:"https://github.com/coder-jay05/course-selling-app"

        },
        {
            id:1,
            name:"Personal Portfolio  ",
            technology:" react.js  ",
            image:portfolio,
            github:"https://github.com/coder-jay05/jay-portfolio--app"

        },
        {
            id:1,
            name:"IRCTC Clone  ",
            technology:"react.js ",
            image:courseimg,
            github:"https://github.com/coder-jay05/irctc-clone-app2"

        }
    ]

  return (
    <>
    <div className='bg-black text-white py-20 ' id='projects'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>

         <h1 className='text-4xl font-bold text-center mb-12'>Projects </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {project.map((project)=>
            (
                <div key={project.id} className='bg-gray-800 px-6 rounded-lg  transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image}  alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover mt-2'></img>
                    <h3 className='text-2xl font-bold bg mb-2' >{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technology}</p>
                    <a href={project.github}  className='mt-4 mb-2 inline-block bg-blue-600 py-2 px-2 rounded-lg'>Github</a>
                </div>
            ))}
        </div>
        </div>
        </div>
    </>

  )
}

export default Projects