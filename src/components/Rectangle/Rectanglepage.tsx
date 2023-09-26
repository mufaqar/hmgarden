import React from 'react'

function Rectanglepage() {
  return (
    <div className='container mx-auto px-4 '>
      <div className='grid lg:grid-cols-2 gap-10 items-center justify-center'>
      <div className="flex border mt-10 lg:w-[500px] w-full border-none lg:ml-14">
  <span className="text-[64px] md:text-26px mr-2 font-[600] text-black text-opacity-50">01</span>
  <div className='mt-10'>
    <h2 className="text-xl md:text-2xl font-semibold py-4 ">Choose a cleaning service & book it online</h2>
    <p className="text-sm md:text-base ">Use our convenient online booking form to make an appointment or give our GoFantastic mobile app a try!</p>
  </div>
</div>
<div className="flex border mt-10 lg:w-[500px] w-full border-none">
  <span className="text-black text-opacity-50 text-[64px] md:text-26px mr-2 font-[600]">02</span>
  <div className='mt-10'>
    <h2 className="text-xl md:text-2xl font-semibold py-4">We send a Fantastic pro to your place</h2>
    <p className="text-sm md:text-base">Your service is handled by a trained cleaner/maid with the right skill set and equipment to bring optimal results for your household.</p>
  </div>
</div>
<div className="flex border mt-10 lg:w-[500px] w-full border-none lg:ml-14">
  <span className="text-black text-opacity-50 text-[64px] md:text-26px mr-2 font-[600]">03</span>
  <div className='mt-10'>
    <h2 className="text-xl md:text-2xl font-semibold py-4">The cleaner takes care of everything</h2>
    <p className="text-sm md:text-base">The cleaning specialist will make sure to understand your needs and complete the service as per your requirements.</p>
  </div>
</div>
<div className="flex border mt-10 lg:w-[500px] w-full border-none">
  <span className="text-black text-opacity-50 text-[64px] md:text-26px mr-2 font-[600]">04</span>
  <div className='mt-10'>
    <h2 className="text-xl md:text-2xl font-semibold py-4">Enjoy amazing results & more free time</h2>
    <p className="text-sm md:text-base">Let the Fantastic housekeepers do the work and start enjoying that extra free time you saved!</p>
  </div>
</div>

      </div>
    </div>
  )
}

export default Rectanglepage