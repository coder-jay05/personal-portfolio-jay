import React from 'react'

const services =[
  {
    id:1,
    title:"Web Design",
    description:"Creating visually appealing and user-friendly web designing",
  },
  {
    id:2,
    title:"Frontend Development",
    description:"Building responsive and interactive user interfaces",
  },
  {
    id:3,
    title:"Backend Development",
    description:"Building robust server-side logic and databases",
  },
  {
    id:4,
    title:"Full Stack Development",
    description:"Creating visually appealing and user-friendly web designing",
  }
  
] 


const Service = () => {
  return (
    <div className='bg-black text-white py-20 ' id='services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>

         <h1 className='text-4xl font-bold text-center mb-12'>My Services </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {services.map((service)=>(

          <div key={service.id} className='bg-gray-800 px-6 rounded-lg  transform transition-transform duration-300 hover:scale-105'>

            <div className='text-right text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text'>
          {service.id}
            </div>

            <h3 className='mt-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text'>{service.title}</h3>

            <p className='mt-2 text-gray-300'>{service.description}</p>
          <a href='#' className='mt-4 mb-2 inline-block bg-blue-600 py-2 px-2 rounded-lg'>Read More</a>
          </div>
        ))}

         </div>

    </div>
    
    </div>
  )
}

export default Service