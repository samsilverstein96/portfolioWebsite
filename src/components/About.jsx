import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen sm:w-full md:h-screen  bg-[#0B0C10] text-[#C5C6C7]'>
    <div className='flex flex-col justify-center items-center w-full h-full mx-auto'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl text-[#AC3B61] font-extrabold inline border-b-4 border-[#BAB2B5]'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Sam, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='font-bold'>I am passionate about building excellent software that improves
            the lives of those around me. Located in the Greater Toronto Area, I'm a Western University graduate currently working as a Software Engineer. </p>  
          </div>
        </div>
    </div>
  </div>
  )
}

export default About