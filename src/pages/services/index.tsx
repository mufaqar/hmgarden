import Rectanglepage from '@/components/Rectangle/Rectanglepage'
import Link from '@/components/link/linkpage'
import { Filter, Gardenpage, Header, Review, ServiceArea, ServicesFilter, } from '@/components/imports'
import React from 'react'
import { GetServerSideProps} from 'next'
import apolloClient from '../../config/client'
import { AllServices, TypesWithChildren } from '../../config/query'
import Head from 'next/head'

const Services = ({ allServices, allTypes, allTypesWithChildren }: any) => {

  return (
    <>
      <Head>
        <title>HOME AND GARDEN MASTERS Services | Home & Garden Masters </title>
        <meta name="description" content="Over 100 services for your home and garden. 7 days-a-week availability, trained specialists, instant booking, all managed online." />
        <link rel="canonical" href="https://www.homeandgardenmasters.co.uk/services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home & Garden Masters | Elevating Your Living Spaces To New Heights" />
        <meta property="og:url" content="https://www.homeandgardenmasters.co.uk/services" />
        <meta property="og:site_name" content="Home & Garden Mastersg" />
        <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=61551956996609" />
        <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
        <meta property="og:image" content="https://hgm.amazingpestsolution.co.uk/wp-content/uploads/2023/10/shutterstock_1794449392.png" />
        <meta property="og:image:width" content="344" />
        <meta property="og:image:height" content="184" />
        <meta property="og:image:type" content="image/jpng" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@homeandgardenmasters" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="10 minutes" />
      </Head>
      <Header />
      <ServicesFilter />
      <Filter allServices={allServices} allTypes={allTypes} allTypesWithChildren={allTypesWithChildren} />
      <Rectanglepage />
      <Gardenpage />
      <Review />
      <ServiceArea black />
      <Link />
    </>
  )
}

export default Services

export const getServerSideProps : GetServerSideProps  = async () => {
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