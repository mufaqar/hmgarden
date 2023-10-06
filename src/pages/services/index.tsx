import Rectanglepage from '@/components/Rectangle/Rectanglepage'
import Clientpage from '@/components/clientss/clientpage'
import Link from '@/components/link/linkpage'
import { Filter, Gardenpage, Header, Review, ServiceArea, ServicesFilter, } from '@/components/imports'
import React from 'react'
import { GetStaticProps } from 'next'
import  apolloClient from '../../config/client'
import {AllServices, TypesWithChildren} from '../../config/query'

const Services = ({allServices, allTypes, allTypesWithChildren}:any) => {

  return (
    <>
        <Header/>
        <ServicesFilter />
        <Filter allServices={allServices} allTypes={allTypes} allTypesWithChildren={allTypesWithChildren}/>
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
  const [services, typesWithChil] = await Promise.all([
    apolloClient.query({ query: AllServices }),
    apolloClient.query({ query: TypesWithChildren }),
  ]);
  const allServices = services?.data?.services?.nodes
  const allTypes = services?.data.types.nodes
  const allTypesWithChildren = typesWithChil?.data.types.nodes
  return {
    props: {
      allServices,
      allTypes,
      allTypesWithChildren
    },
  };
}