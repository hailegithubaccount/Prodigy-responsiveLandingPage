import React from 'react';
import j from '../Component/image/j.png';

const Analytics = () => {
  return (
    <div className='bg-white py-5 px-4 max-w-screen-xl mx-auto grid md:grid-cols-2 md:mb-5'>
      <div className='max-w-[1240px] mx-auto'>
        <img className="px-6 md:w-5/6" src={j} alt="logo" />
      </div>
      <div className='px-3 py-2 md:py-5'>
        <p className='py-1 text-green-400 font-bold sm:px-[2rem] md:px-[5rem]'>Features of our Internships</p>
        <h1 className='py-1 font-bold md:px-[5rem]'>MANAGE  Internships </h1>
        <p className='px-3 py-2 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem a
          maxime facilis sit debitis impedit aspernatur autem dicta? Blanditiis quasi eum obcaecati non quia minus velit voluptate beatae. Ut, porro.
        </p>
        <button className='bg-black w-[200px] font-medium rounded-md mx-auto py-3 text-green-500 md:ml-0'>
          get started
        </button>
      </div>
    </div>
  );
}

export default Analytics;
