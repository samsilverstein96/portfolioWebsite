import React from 'react'
import JavaScript from '../assets/javascript.svg';
import Node from '../assets/nodejs-icon.svg';
import Mongo from '../assets/mongo.svg';
import Angular from '../assets/angular.svg';
import Spring from '../assets/spring-icon.svg'
import Java from '../assets/java.svg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0B0C10] '>
        {/* container */}
        <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#C5C6C7] font-bold inset-0'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#45a29e] '>Familiar Technologies</p>
                <p className='py-4'>These are the technologies I am proficient in</p>
            </div>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-center py-8'>
                <div className='shadow-sm shadow-[#45a29e] hover:scale-110 duration-75 rounded-xl'>
                    <img className='w-[175px] h-[175px] mx-auto my-3' src={Java} alt="HTML icon" />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-sm shadow-[#45a29e] hover:scale-110 duration-75 rounded-xl'>
                    <img className='w-40 mx-auto my-3' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-sm shadow-[#45a29e] hover:scale-110 duration-75 rounded-xl'>
                    <img className='w-[175px] h-[175px] mx-auto my-3' src={Spring} alt="HTML icon" />
                    <p className='my-4'>SPRING BOOT</p>
                </div>
                <div className='shadow-sm shadow-[#45a29e] hover:scale-110 duration-75 rounded-xl'>
                    <img className='w-[175px] h-[175px] mx-auto my-3' src={Angular} alt="HTML icon" />
                    <p className='my-4'>ANGULAR</p>
                </div>
                <div className='shadow-sm shadow-[#45a29e] hover:scale-110 duration-75 rounded-xl'>
                    <img className='w-[146px] h-[146px] mx-auto my-3' src={Node} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-sm shadow-[#45a29e] hover:scale-110 duration-75 rounded-xl'>
                    <img className='w-[175px] h-[175px] mx-auto my-3' src={Mongo} alt="HTML icon" />
                    <p className='my-4'>MONGO DB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills