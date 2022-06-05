import React from 'react'
import Music from '../assets/music.svg'
import Ai from '../assets/ai.svg'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen text-[#123C69] bg-[#EEE2DC]'>
        {/* container */}
        <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#BAB2B5] text-[#AC3B61] '>Projects</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-6 text-center py-8'>
            <a href="https://github.com/samsilverstein96/musicalTexture/blob/main/texture_v2.ipynb">
                <div className='items-center space-y-8 shadow-sm shadow-[#BAB2B5] hover:scale-110 duration-75 rounded-xl flex flex-col '>
                    <h1 className='text-4xl font-bold inline text-center'>Algorithmic Analysis of Musical Texture </h1>
                    <img src={Music} alt='music icon' style={{ width: '80px' }} />
                    <p className='text-[#123C69] py-4 max-w-[700px]'>A python jupyter notebook which determines the 
                                                                        likeness of 'Texture' between individual instruments within a musical arrangement, by using Principle Component Analysis, 
                                                                        combined with their euclidian distance. Presented software at joint conference between Western and McMaster universities.
                    </p>       
                </div>
            </a>
                <a>
                    <div className='items-center space-y-8 shadow-sm shadow-[#BAB2B5] hover:scale-110 duration-75 rounded-xl flex flex-col '>
                        <h1 className='text-4xl font-bold inline text-center'>Movie Sentiment Analysis</h1>
                        <img src={Ai} alt='music icon' style={{ width: '80px' }} />
                        <p className='text-[#123C69] py-4 max-w-[700px]'>A project which determines the similarity of movies based on their descriptions, using the skip-gram model. </p>  
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects