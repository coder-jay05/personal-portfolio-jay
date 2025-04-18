import React from "react";

const Education = () => {
  const Education = [
    {
      id: 1,
      course:" Bachelor of science in Information Technology (B.sc IT)",
      name: "S.k College of Science And Commerce ( University of Mumbai ) ",
      date:"04/2020-06/2023",
      sub:"Bsc.IT",
      percent:"80.05% CGPA",
      address:"Navi Mumbai"
      
    },
    {
        id: 2,
        course:" Higher Secondary Certificate ",
        name: "Dnyan Pushpa Vidya Niketan Jr College (DY PATIL) ",
        date:"06/2018-05/2020",
        sub:"12th (HSC)",
        percent:"60% Score ",
        address:"Navi Mumbai"
        
      },
      {
        id: 3,
        course:"Secondary School Certificate",
        name: "Guru Gobind Singh Education Academy ",
        date:"04/2008-04/2018",
        sub:"10th (SSC)",
        percent:"73% ",
        address:"Navi Mumbai"
        
      },
  ];
  return (
    <>
       <div className='bg-black text-white py-20 ' id='services'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>

         <h1 className='text-4xl font-bold text-center mb-12'>Education </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {Education.map((service)=>(

          <div key={service.id} className='bg-gray-800 px-6 rounded-lg  transform transition-transform duration-300 hover:scale-105'>

            <div className='text-right text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text'>
          {service.id}
            </div>

            <h3 className='mt-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text'>{service.course}</h3>

            <h2 className='mt-2 text-gray-300'>{service.name}</h2>
            <div className="flex justify-between">
            <p className='mt-2 text-gray-300'>{service.date}</p>
            <p className='mt-2 text-gray-300'>{service.address}</p>

            </div>
            <p className='mt-2 text-gray-300'>{service.sub}</p>
            <p className='mt-2 text-gray-300'>{service.percent}</p>

          </div>
        ))}

         </div>

    </div>
    
    </div>
    </>
  );
};

export default Education;
