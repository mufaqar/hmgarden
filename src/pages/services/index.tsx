import Rectanglepage from '@/components/Rectangle/Rectanglepage'
import Clientpage from '@/components/clientss/clientpage'
import Link from '@/components/link/linkpage'
import { Filter, Gardenpage, Header, ServicesFilter, } from '@/components/imports'
import React from 'react'

const Services = () => {
  return (
    <>
        <Header/>
        <section></section>
        <ServicesFilter />
        <Filter/>
        <Rectanglepage/>
        <Gardenpage/>
        <Clientpage/>
        <Link/>
    </>
  )
}

export default Services