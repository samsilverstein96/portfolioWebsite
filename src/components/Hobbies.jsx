import React from 'react'
import Tennis from '../assets/tennis.jpg'
import Basketball from '../assets/basketball.jpg'
import Lotus from '../assets/lotus.jpg'


const Hobbies = () => {
  return (
    <div name='projects' className='w-full md:h-screen lg:h-screen text-[#66fcf1] bg-[#0B0C10]'>
        {/* container */}
        <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#BAB2B5] text-[#66fcf1] '>Interests</p>
            </div>
            <div  className='w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-4 text-center py-32 font-extrabold'>
                <div>
                    <img className='w-[250px] h-[250px] mx-auto my-3 rounded-full hover:scale-110 duration-75' src={Tennis} alt="HTML icon" />
                    <p className='my-4 text-xl'>Tennis</p>
                    <p>I first discovered tennis 3 years ago and have fallen in love with it ever since. I often spend weekends playing at the local tennis club</p>
                </div>
                <div className=''>
                    <img className='w-[250px] h-[250px] mx-auto my-3 rounded-full hover:scale-110 duration-75 ' src={Basketball} alt="HTML icon" />
                    <p className='my-4 text-xl'>Basketball</p>
                    <p className='font-bold'>I have a love and fascination for the sport of basketball. I enjoy reading about basketball anlytics as much as I enjoy watching games.
                        Some of my favorite baskebtall books include The Midrange Theory and Sprawlball
                    </p>
                </div>
                <div>
                    <img className='w-[250px] h-[250px] mx-auto my-3 rounded-full hover:scale-110 duration-75' src={Lotus} alt="HTML icon" />
                    <p className='my-4 text-xl'>Magic the Gathering</p>
                    <p className='font-bold'>
                        I love playing and collecting magic the gathering cards. I regularly enter tournaments at my local game store. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hobbies