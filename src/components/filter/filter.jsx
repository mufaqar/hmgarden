import React, { useEffect, useState } from 'react'
import { ServiceCard } from '../imports'
import { Services, ServicesCategories } from '@/const/services'


function FilterComp() {

  const [ServicesList, setServicesList] = useState(Services)
  
  const handleTabs = (category) => {
    const filtedData = Services.filter(item => item.category === category.name)
    setServicesList(filtedData)
  }

  useEffect(()=>{
    const filtedData = Services.filter(item => item.category === "Gardening")
    setServicesList(filtedData)
  },[])

  return (
    <div className='bg-black py-10 w-full h-auto mt-10 pb-20 text-white '>
      <div className='container mx-auto flex flex-wrap justify-center gap-6 items-center md:gap-16 text-center px-4'>
        {
          ServicesCategories?.map((c, i) => (
            <div  className='flex flex-col items-center cursor-pointer' key={i} onClick={()=>handleTabs(c)}>
              <img src={c.icon} alt="" className='sm:w-14 sm:h-14 w-12 mb-2 h-12' />
              <h4 className='text-sm sm:text-base'>{c.name}</h4>
            </div>
          ))
        }
      </div>

      <div className='grid sm:grid-cols-2 px-3 container mx-auto lg:grid-cols-3 gap-10 mt-12 '>
        {
          ServicesList.map((service, idx) => {
            return (
              <ServiceCard data={service} key={idx} />
            )
          })
        }
      </div>

    </div>
  )
}

export default FilterComp