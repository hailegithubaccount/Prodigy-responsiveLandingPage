import React from 'react'
import d from '../Component/image/d.png';
 

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] py-4'>
        <div className='max-w-[]1240px] mx-auto  grid md:grid-cols-3 gap-8'>
            <div className='w-full border shadow-xl flex flex-col p-4 m-4 hover:scale-95 duration-150'>
               <img className='w-20 mx-auto mt-[-3rem ] bg-white' src={d} alt=''/> 
               <h1 className='text-2xl font-bold text-center py-8'>single user</h1>
               <p className=' text4xl justify-center text-center font-bold '>$123</p>
               <di className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'> 500 gb storage</p>
                 <p className='py-2 border-b mx-8 mt-8'>1 grand user</p>
                 <p className='py-2 border-b mx-8 mt-8 mb-8'>send up to the 2GB</p>
               </di>



               <button className='bg-green-500 w-[200px] font-medium rounded-md mx-auto py-3 text-black'>
        start the trail
        </button>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 m-4 hover:scale-95 duration-150'>
               <img className='w-20 mx-auto mt-[-3rem ] bg-white' src={d} alt=''/> 
               <h1 className='text-2xl font-bold text-center py-8'>single user</h1>
               <p className=' text4xl justify-center text-center font-bold '>$123</p>
               <di className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'> 500 gb storage</p>
                 <p className='py-2 border-b mx-8 mt-8'>1 grand user</p>
                 <p className='py-2 border-b mx-8 mt-8 mb-8'>send up to the 2GB</p>
               </di>



               <button className='bg-green-500 w-[200px] font-medium rounded-md mx-auto py-3 text-black'>
        start the trail
        </button>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 mr-10 hover:scale-95 duration-150'>
               <img className='w-20 mx-auto mt-[-3rem ] bg-white' src={d} alt=''/> 
               <h1 className='text-2xl font-bold text-center py-8'>single user</h1>
               <p className=' text4xl justify-center text-center font-bold '>$123</p>
               <di className='text-center font-medium'>
                 <p className='py-2 border-b mx-8 mt-8'> 500 gb storage</p>
                 <p className='py-2 border-b mx-8 mt-8'>1 grand user</p>
                 <p className='py-2 border-b mx-8 mt-8 mb-8'>send up to the 2GB</p>
               </di>



               <button className='bg-green-500 w-[200px] font-medium rounded-md mx-auto py-3 text-black'>
        start the trail
        </button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
