import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import ProfilePic from '../assets/profilepic.jpg'
import Resume from '../assets/samSilversteinResume.pdf'


const Home = () => {
  return (
    <div name = 'home' className=' w-full h-screen md:h-screen bg-[#0B0C10]'>

        {/* container */}
        <div className=' justify-center h-full'>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 space-x-8'>

            <div className='w-full my-52'>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#66fcf1]'>Sam Silverstein</h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#45a29e]'>Full Stack Developer</h2>
              <p className='text-[#C5C6C7] py-4 max-w-[700px]'>I am an experienced full stack developer currently exploring opportunities.
              </p>
              
              <div className='my-10'>
                
              <a
                className='flex items-center text-gray-300'
                 href={Resume}
                target="_blank"
                rel="noreferror" 
              >
                  <button to='about' className='text-[#1F2833] group text-2xl border-2 px-6 py-3 my-2 bg-[#C5C6C7] transition duration-300 hover:scale-105 hover:bg-[#66fcf1] flex justify-center items-center'>View Resume 
                      {/* <span className='group-hover:rotate-90 duration-300'> */}
                        <HiArrowNarrowRight className='ml-3'/> 
                      {/* </span> */}
                  </button>
                  </a>
              </div>
            </div>

            <div className='w-full justify-center flex h-auto border-none'> 
                    <img className='w-auto h-4/5 object-bottom shadow-lg rounded-lg max-w-full align-middle border-2 border-[#66fcf1]' src={ProfilePic} alt="profile picture" />
            </div>
            
          </div>
            
        </div>

    </div>
  )
}

export default Home