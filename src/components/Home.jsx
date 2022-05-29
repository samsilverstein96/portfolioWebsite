import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import ProfilePic from '../assets/profilepic.jpg'

const Home = () => {
  return (
    <div name = 'home' className=' w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1500px] mx-auto px-8 flex flex-col justify-center h-full'>
          <div className='grid-cols-2 flex space-x-8'>

            <div className='w-full'>
              <p className='text-pink-600'>Hi My name is</p>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sam Silverstein</h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>Maecenas dapibus a nisi vel posuere. In enim sapien, molestie vitae consectetur a, faucibus nec dolor. Nulla facilisi. Proin dictum tellus vitae diam pharetra tincidunt.
                    Phasellus at faucibus nibh. Quisque lobortis viverra est ut elementum. Integer lobortis interdum purus eget euismod. Cras pulvinar pellentesque massa, a congue nulla gravida et.
                      Aenean dignissim dignissim elementum. 
              </p>
              
              <div>
                  <button className='text-[#edeef3] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                  </button>
              </div>
            </div>

            <div className='w-full justify-center flex  h-auto border-none'> 
                    <img className='w-auto  h-4/5 shadow-lg rounded-lg max-w-full align-middle border-2 border-[#ccd6f6]' src={ProfilePic} alt="profile picture" />
            </div>
            
          </div>
            
        </div>

    </div>
  )
}

export default Home