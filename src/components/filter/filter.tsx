import React from 'react'
import Card from '../filter/card'
function filter() {
  return (
    <div className='bg-black py-10 w-full h-auto xl:h-[750px] mt-10 text-white '>
        <div className='container mx-auto flex flex-wrap justify-center items-center gap-10 text-center px-4'>

<div className='flex flex-col items-center m-4 '>
  <img src="/images/Vector1.png" alt="" className='w-14 h-14 mb-2' />
  <h4>Gardening</h4>
</div>

<div className='flex flex-col items-center m-4'>
  <img src="/images/Vector2.png" alt="" className='w-14 h-14 mb-2' />
  <h4>Landscaping</h4>
</div>

<div className='flex flex-col items-center m-4'>
  <img src="/images/Vector3.png" alt="" className='w-14 h-14 mb-2' />
  <h4>Fencing</h4>
</div>

<div className='flex flex-col items-center m-4'>
  <img src="/images/Vector4.png" alt="" className='w-14 h-14 mb-2' />
  <h4>Waste Removal</h4>
</div>

<div className='flex flex-col items-center m-4'>
  <img src="/images/Vector5.png" alt="" className='w-14 h-14 mb-2' />
  <h4>Pressure Washing</h4>
</div>

<div className='flex flex-col items-center m-4'>
  <img src="/images/Vector6.png" alt="" className='w-14 h-14 mb-2' />
  <h4>Tiling and painting</h4>
</div>

</div>
     <Card/>

    </div>
  )
}

export default filter