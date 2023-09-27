import Rectanglepage from '@/components/Rectangle/Rectanglepage'
import Clientpage from '@/components/clientss/clientpage'
import Link from '@/components/link/linkpage'
import { Filter, Gardenpage, Header, Review, ServiceArea, ServicesFilter, } from '@/components/imports'
import React from 'react'

const Services = () => {
  return (
    <>
        <Header/>
        <ServicesFilter />
        <Filter/>
        <Rectanglepage/>
        <Gardenpage/>
        <Review/>
        <Clientpage/>
        <ServiceArea black/>
        <Link/>
    </>
  )
}

export default Services