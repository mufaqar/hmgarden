import React from 'react'
import { Container, Header, MainHeading } from '@/components/imports'
import { useRouter } from 'next/router'
import {  ServiceSingle } from '../../config/query'
import apolloClient from '../../config/client'

const Slug = ({ singleService }) => {

     return (
          <>
               <Header black />
               <Container className="pt-20 flex flex-col items-center">
                    <MainHeading>{singleService?.title}</MainHeading>
                   <div className='mt-4 text-center max-w-[980px] single_service'>
                   <div
                   dangerouslySetInnerHTML={{ __html: singleService.content }}
                   />
                   </div>
               </Container>
               
          </>
     )
}

export default Slug



export const getStaticProps = async ({ params }) => {

     const services = await apolloClient.query({
          query: ServiceSingle,
          variables: {
               id: params.slug,
          },
     });
     const singleService = services?.data?.service

     return {
          props: {
               singleService,
          },
     };
}

export async function getStaticPaths() {
     const paths = [];
     return {
          paths,
          fallback: 'blocking',
     };
}