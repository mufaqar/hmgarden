import React from 'react'
import mainImage from '../../../public/images/main.jpg'

function Gardenpage() {
  return (
    <main className=' mt-32 w-full  h-screen bg-no-repeat bg-cover ' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${mainImage.src})` }}>
      <div className='container mx-auto px-4'>
      <div className='lg:w-[500px] w-full mx-auto text-center text-white pt-40'>
         <h2 className='text-3xl lg:text-36px font-semibold'>Meet the Home and Garden Masters Team</h2>
      </div>
      <div className='grid xl:grid-cols-3 mt-28 text-white lg:grid-cols-2 gap-5'>
        <div className='border lg:w-[473px] w-full border-none '>
            <h3 className='font-[500]'>Fully trained and insured cleaners</h3>
           <div className=' lg:w-[400px] w-full'>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Interviewed and selected in person.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Extensively trained by the Fantastic Academy.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Carrying a public liability insurance of up to 5 million.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Efficient, neat, and polite.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Handling your possessions with extra care.</p>
           </div>
           </div>
        </div>
        <div className='border lg:w-[350px] w-full border-none '>
           <h3 className='font-[500]'>Local cleaners who know exactly what’s right for your home</h3>
           <div className=' lg:w-[400px] w-full'>
           <div className="flex items-start">
             <div className="w-3 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Trained to clean following a special agency-approved checklist.</p>
           </div>
           <div className="flex items-start">
             <div className="w-5 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white"> Skilled in applying the right cleaning method and top-quality detergents, depending on your property’s specific conditions.</p>
           </div>
           </div>
        </div>
        <div className='border lg:w-[390px] w-full border-none '>
        <h3 className='font-[500]'>Technicians with professional grade equipment*</h3>
        <div className='lg:w-[400px] w-full'>
        <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Innovative Gutter Vac Clearance System.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white">Dip Tank Cleaning technology with special solutions.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white"> Hot Water Extraction & Dry Carpet Cleaning machines.</p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white"> Wet Vacuum Cleaners, Floor Scrubbersm & Polishers. </p>
           </div>
           <div className="flex items-start">
             <div className="w-2 h-2 mt-2 mr-2 bg-white rounded-full"></div>
              <p className="text-white"> High-Reach Water-Fed Pole Window Cleaning System. </p>
           </div>
        </div>
        </div>
       
      </div>

      </div>
    </main>
  )
}

export default Gardenpage