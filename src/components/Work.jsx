import React from 'react'
import citigroup from '../assets/citigroup.png';



const work = () => {
  return (
    <div name='work' className='w-full md:h-screen lg:h-screentext-[#C5C6C7] bg-[#0B0C10]'>
      <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-[#C5C6C7] border-[#BAB2B5] '>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 '>
            <div className='w-full justify-center flex  h-full row-span-full border-none '> 
                    <img className='w-auto  h-4/5 my-30 rounded-lg  align-middle  ' src={citigroup} alt="profile picture" />
            </div>
            <div className='w-full justify-center flex h-4/5  my-10'>
                <div className= 'sm:text-right pb-8 pl-4'>
                  <div className=' flex flex-col space-y-4'>
                    <h1 className='text-4xl text-[#66fcf1] font-bold inline text-center border-[#BAB2B5]'>
                      Citigroup
                    </h1>
                    <h1 className='text-4xl text-[#45a29e] font-bold inline  text-center border-[#BAB2B5]'>
                      Full Stack Developer
                    </h1>
                    <p className=' text-[#C5C6C7] font-bold text-center border-[#BAB2B5]'>
                    At Citibank, I worked as a full stack developer under Trade and Treasury Solutions. I was put on citiDirect as a project, where I had to implement 
                    various features which affect all user journeys. I led the development for various features wich primarily aim to 
                    reduce pain points for various user journeys. I was given the oppotunity to develop such features from front to back end, including search filters, 
                    user identification and grid interactions. User experience has improved durastically, as their preferences would be saved for future sessions. 
                    Frameworks used include AngularJS, SpringBoot, MongoDB and NodeJS. In addition to this, I also spearheaded my own internal project, to help improve development. 
                    This project redirects log messages from a given microservice to an application which updates and filters logging messages dynamiccaly. I managed all apects of development 
                    of this project from beginnning to end, including risk identification, jira story/task creation, development, testing and deployment. 
                      </p>
                  </div>         
                 
                 
                </div>
            </div>
            
            <div>
            </div>
            <div className='w-full h-4/5 justify-center flex'>
                <div className= 'sm:text-right pb-8 pl-4'>
                  <div className=' flex flex-col space-y-4'>
                    <h1 className='text-4xl text-[#66fcf1] font-bold inline text-center border-[#BAB2B5]'>
                      Citigroup
                    </h1>
                    <h1 className='text-4xl text-[#45a29e] font-bold inline  text-center border-[#BAB2B5]'>
                      Software Developer Summer Analyst
                    </h1>
                    <p className=' text-[#C5C6C7] font-bold text-center border-[#BAB2B5]'>
                    I also did an internship at Citibank in Summer of 2020. Throughout this internship I was able to gain exposure to various aspects of software development such as,
                    Data Wrangling, Cloud Engineering, UX Design, and secutiry. Lead by Nueda, I was able to gain first hand experience learning about industry standards, such as agile development standards, 
                    SaaS and so on, culminated by a final financial portfolio project, where myself and a team applied these principles to build a full web-application. Included in this application 
                    was an interface with 3rd party services to create a centralized dashboard view of a users investments and bank accounts. Utilizing standards learned throughout each sprint of the 
                    internship. 
                      </p>
                  </div>         
                 
                 
                </div>
            </div>

            
            
        </div>
      </div>
    </div>
  )
}

export default work