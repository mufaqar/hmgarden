import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ data }: any) => {
  return (
    <div className='relative'>
      <div className="relative max-h-[250px] w-full h-full serviceCard-shadow group">
        <Image src={data?.featuredImage?.node?.mediaItemUrl || data?.servicesTypeInfo?.image?.mediaItemUrl} alt={data.title} width={344} height={187} className='w-full h-full object-cover' />
        <div className='absolute group-hover:h-full  bottom-0 bg-black/40  flex flex-col justify-center items-center p-3 text-white w-full transition-all duration-500 ease-in-out text-center'>
          <Link href={`/services/${data.slug}`} className='text-xl'> {data.title || data.name}</Link>
          <section className='text-base hidden '>
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt }}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard