import React from 'react'
import mainImage from '../../../public/images/main.jpg'

function Gardenpage() {
  return (
    <main className=' mt-32 w-full min-h-[450px] bg-no-repeat bg-cover ' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${mainImage.src})` }}>
      <div className='container mx-auto px-4'>
      <div className='lg:w-[1024px] w-full mx-auto text-center text-white pt-40'>
         <h2 className='text-3xl lg:text-36px font-semibold'>Meet the Home and Garden Masters Team</h2>

         <p className='font-[500] mt-10'>Home and Garden Masters Team is a dedicated group of experts specializing in home and garden improvement. With a wealth of experience in landscaping, interior design, renovation, and outdoor maintenance, we're here to help you transform your living spaces into your dream environment. Our mission is to make your house a home and your garden a sanctuary.</p>
          
      </div>
      

    

      </div>
    </main>
  )
}

export default Gardenpage