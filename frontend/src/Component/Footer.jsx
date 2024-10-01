import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,

} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-17 px-4 grid lg:grid-cols-3 gab-8 text-gray-300 '>
      <div>
        <h1 className='w-full text-3xl font-bold text-green-400'>REACT.</h1>
    <p>Lorem ipsum dolor si md:t amet, consectetur adipisicing elit. Iste illum voluptatem labore dolorum deserunt quibusdam ipsam, libero sed voluptatibus fugit placeat quasi, quisquam ut quaerat officia inventore debitis laboriosam! Suscipit?</p>
      <div className='flex  justify-between md:w-[75%] my-6'>
        <FaFacebookSquare  size={30}/ >
        <FaDribbbleSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaTwitterSquare size={30}/>
        <FaInstagram size={30}/>
        
      </div>
      
      </div>
      <div className='lg:col-span-2 flex justify-between lg:m-4 '>
     <div className=''>
      <h6 className='font-mediun text-gray-400'>solution</h6>
        <ul>

          <li  className='py-2 text-sm'>commerce</li>
          <li  className='py-2 text-sm'>insight</li>
          <li  className='py-2 text-sm'>anlaytics</li>
          <li  className='py-2 text-sm'>marketing</li>
        </ul>


     </div>
     <div className=''>
      <h6 className='font-mediun text-gray-400'>support</h6>
        <ul>

          <li className='py-2 text-sm'>pricing</li>
          <li className='py-2 text-sm'>documentation</li>
          <li className='py-2 text-sm'>guides</li>
          <li className='py-2 text-sm'>API status</li>
        </ul>


     </div>
     <div className=''>
      <h6 className='font-mediun text-gray-400'>Company</h6>
        <ul>

          <li  className='py-2 text-sm'>About</li>
          <li  className='py-2 text-sm'>Blog</li>
          <li  className='py-2 text-sm'>press</li>
          <li  className='py-2 text-sm'>insight</li>
        </ul>


     </div>
     <div className=''>
      <h6 className='font-mediun text-gray-400'>Legal</h6>
        <ul>

          <p className='py-2 text-sm'>Claim</p>
          <p className='py-2 text-sm'>Policy</p>
          <p className='py-2 text-sm'>Terms</p>
          <p className='py-2 text-sm'>insight</p>
        </ul>


     </div>
     




      </div>


    </div>
  )
}

export default Footer
