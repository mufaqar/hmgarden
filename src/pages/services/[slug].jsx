import React from 'react';
import { Container, Header, MainHeading } from '@/components/imports';
import { useRouter } from 'next/router';
import { ServiceSingle } from '../../config/query';
import apolloClient from '../../config/client';
import Image from 'next/image';

const Slug = ({ singleService }) => {
  const mediaItemUrl = singleService?.servicesInfo?.beforeAfter?.mediaItemUrl;

  return (
    <>
      <Header black />
      <Container className="pt-20 flex flex-col  items-center">
        <MainHeading>{singleService?.title}</MainHeading>
        <Image
          src={singleService?.featuredImage?.node?.mediaItemUrl}
          className=" max-w-[980px] w-full mt-10"
          alt="image"
          width={800}
          height={720}
        />
        <div className="mt-4 text-center max-w-[980px] single_service">
          <div dangerouslySetInnerHTML={{ __html: singleService.content }} />
        </div>
        {mediaItemUrl && (
          <Image
            src={mediaItemUrl}
            className="max-w-[1000px] mt-10"
            alt="Before & After"
            width={1000}
            height={780}
          />
        )}
      </Container>
    </>
  );
};

export default Slug;

export const getStaticProps = async ({ params }) => {
  const services = await apolloClient.query({
    query: ServiceSingle,
    variables: {
      id: params.slug,
    },
  });
  const singleService = services?.data?.service;

  return {
    props: {
      singleService,
    },
  };
};

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
