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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illum voluptatem labore dolorum deserunt quibusdam ipsam, libero sed voluptatibus fugit placeat quasi, quisquam ut quaerat officia inventore debitis laboriosam! Suscipit?</p>
      <div>
        <FaFacebookSquare/>
        <FaDribbbleSquare/>
        <FaGithubSquare/>
        
      </div>
      
      </div>


    </div>
  )
}

export default Footer
