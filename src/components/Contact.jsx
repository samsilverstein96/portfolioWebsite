import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0B0C10] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bcb985e5-3763-495f-b7b2-701bdea2934e" className='flex flex-col max-w-[800px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#BAB2B5]'>Contact</p>
                <p className='text-[#66fcf1] py-4'> Submit the form below or send me an email at sma.silverstein96@gmail.com</p>
            </div>
            <input className='bg-[#66fcf1]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#66fcf1]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#66fcf1]' name="message" rows="10" placeholder='message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>

  )
}

export default Contact