import React from 'react'
import { MainHeading } from '../imports'

function clientpage() {
  return (
   <main className='container mx-auto px-4'>
    <div className='items-center justify-center'>
        <div className='mt-20'>
           <MainHeading>Top Rated Cleaning Services in the UK</MainHeading>
        </div>

        <div className='flex flex-col-reverse mt-20 lg:flex-row mb-10 items-center'>
           <div className='lg:w-[810px] w-full '>
            <div>
                <p>Whether you don't have the time or just want to focus on the better things in life, Fantastic Services is here to help you with a plethora of cleaning services available for you at any time.</p>
            </div>
            <div className='py-8'>
                  <h5 className='font-bold'>Regular cleaning: </h5>
                  <p>An hourly cleaning service that includes the usual household cleaning duties (kitchen, bathroom, bedroom, hallway cleaning).</p>
            </div>
            <div>
            <h5 className='font-bold'>One-off cleaning:</h5>
            <p>The service is charged by the hour, and the professionals will focus on the customer's priorities (or checklist). Appropriate for people who are looking for a deep home cleaning.</p>
            </div>
            <div className='py-8'>
            <h5 className='font-bold'>End of tenancy cleaning: </h5>
            <p>A required cleaning service when tenants leave the property they have been leasing. Expert cleaners follow an estate agency-approved checklist and will re-clean the property if the landlord isn't satisfied (48-hour guarantee). Oven cleaning is also included in the price.</p>
            </div>
            <div>
                <h4 className='font-bold'>Carpet and upholstery cleaning: </h4>
                <p>The service includes stain pre-treatment, and depending on the fabric - the technician will use a hot water extraction machine or dry cleaning method to deep clean the carpet or upholstery. Furthermore, you can benefit from FREE fabric protection for long-lasting results!</p>
            </div>
            <div className='py-8'>
                <h4 className='font-bold'>Oven cleaning: </h4>
                <p>Firstly, the cleaner will inspect if your cooker works appropriately. After that, all the removable parts will be disassembled and placed in a dip tank with a powerful cleaning solution. The rest of the appliance will be thoroughly scrubbed. And lastly, the cleaner will assemble the parts back and will test if your cooker functions.</p>
            </div>
           </div>
           <div>
            <img src="/images/consulting.png" alt="" className='max-w-[500px]' />
           </div>
        </div>
    </div>
   </main>
  )
}

export default clientpage