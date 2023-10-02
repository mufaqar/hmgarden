import Rectanglepage from '@/components/Rectangle/Rectanglepage'
import Clientpage from '@/components/clientss/clientpage'
import Link from '@/components/link/linkpage'
import { Filter, Gardenpage, Header, Review, ServiceArea, ServicesFilter, } from '@/components/imports'
import React from 'react'
import { GetStaticProps } from 'next'
import  apolloClient from '../../config/client'
import {AllServices} from '../../config/query'

const Services = ({allServices, allTypes}:any) => {

  return (
    <>
        <Header/>
        <ServicesFilter />
        <Filter allServices={allServices} allTypes={allTypes}/>
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



export const getStaticProps: GetStaticProps = async () => {
  const [services] = await Promise.all([
    apolloClient.query({ query: AllServices }),
  ]);
  const allServices = services?.data?.services?.nodes
  const allTypes = services?.data.types.nodes
  return {
    props: {
      allServices,
      allTypes
    },
  };
}