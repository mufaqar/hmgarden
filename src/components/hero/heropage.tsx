import React from 'react'
import Image from 'next/image'
function heropage() {
  return (
    <main className='container mx-auto lg:px-20 mt-10 px-4 '>
      <div className='bg-black items-center h-auto'>
      <div className='flex flex-col lg:flex-row items-center '>
      <div className='lg:w-[510px] w-full items-center justify-center'>
        <Image src="/images/Group.png" alt="" width={410} height={690} className='pt-2 rounded-md lg:h-[600px] lg:w-[510px] w-full' />
      </div>
      <div className='text-white  text-center items-center mx-auto py-6'>
        <h2 className='text-[32px] font-[500] py-3'>Lorem ipsum dolor</h2>
        <p className='w-full lg:w-[642px] lg:h-[207px] px-5 '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc 
non blandit massa enim. Arcu ac tortor dignissim convallis aenean et tortor. Ut 
porttitor leo a diam sollicitudin tempor id. Quis eleifend quam adipiscing vitae 
proin sagittis nisl rhoncus mattis. Ut porttitor leo a diam. Magnis dis parturient 
montes nascetur ridiculus mus. Nisl tincidunt eget nullam non. In egestas erat 
imperdiet sed euismod nisi. Pharetra diam sit amet nisl suscipit adipiscing bibendum 
est ultricies. Neque egestas congue quisque egestas diam in arcu cursus euismod. 
Adipiscing enim eu turpis egestas.
        </p>
      </div>
    </div>
      </div>
    </main>
  )
}

export default heropage