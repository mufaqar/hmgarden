import Image from 'next/image'
<<<<<<< HEAD
import React from 'react'

const ServiceCard = ({data}:any) => {
  console.log("🚀 ~ file: service.card.tsx:5 ~ ServiceCard ~ data:", data)
  return (
     <div className="relative w-[344px]">
          <Image src={data.image} alt={data.title} width={344} height={187} />
          <div className='absolute hover:h-full bottom-0 bg-black/40 text-xl flex flex-col justify-center items-center p-3 text-white w-full transition-all duration-500 ease-in-out text-center'>{data.title}</div>
     </div>
=======
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ data }: any) => {
  return (
    <div className='relative'>
      {
        data.title === "Stump Removal" && <div className=" px-3 absolute -top-6 text-sm">Brickwork Services</div>
      }
      {
        data.title === "Paving and driveway laying" && <div className="px-3 absolute -top-6 text-sm">Brickwork Services</div>
      }
      <div className="relative max-h-[250px] w-full h-full serviceCard-shadow group">
        <Image src={data?.featuredImage?.node?.mediaItemUrl || data?.servicesTypeInfo?.image?.mediaItemUrl} alt={data.title} width={344} height={187} className='w-full h-full object-cover' />
        <div className='absolute group-hover:h-full  bottom-0 bg-black/40  flex flex-col justify-center items-center p-3 text-white w-full transition-all duration-500 ease-in-out text-center'>
          <Link href={`/services/${data.slug}`} className='text-xl'> {data.title || data.name}</Link>
          <section className='text-base hidden group-hover:block  '>
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt }}
            />
          </section>
        </div>

      </div>
    </div>
>>>>>>> main
  )
}

export default ServiceCard