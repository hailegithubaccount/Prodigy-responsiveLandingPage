import React from 'react';

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white  px-6'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
        
        {/* Heading and Description */}
        <div className='lg:col-span-1'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>
          Let’s talk about
          Love to hear from you!
          </h2>
          <p className='mt-4'>
          Let’s talk about
          Love to hear from you!
          </p>
        </div>

        {/* Input and Button */}
        <div className='flex flex-col sm:flex-row items-center justify-center'>
          <input 
            className="p-3 w-full sm:w-auto rounded-md text-black mr-0 sm:mr-3 mb-4 sm:mb-0" 
            type="email" 
            placeholder='Enter your email' 
          />
          <button className='bg-green-500 sm:w-auto w-full font-medium rounded-md py-3 px-6'>
            Notify Me
          </button>
        </div>
        <p>we care about your protection of data.read about our <span className='text-green-300'>privacy policy</span> </p>
        
      </div>
    </div>
  );
}

export default NewsLetter;
