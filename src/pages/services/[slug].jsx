import React from 'react';
import { Container, Header, MainHeading } from '@/components/imports';
import { useRouter } from 'next/router';
import { ServiceSingle } from '../../config/query';
import apolloClient from '../../config/client';
import Image from 'next/image';
import Head from 'next/head';

const Slug = ({ singleService }) => {
  const mediaItemUrl = singleService?.servicesInfo?.beforeAfter?.mediaItemUrl;

  return (
    <>
    <Head>
        <title> Home And Garden Masters  Services | Home & Garden Masters </title>
        <meta name="description" content="Over 100 services for your home and garden! 7 days-a-week availability, trained specialists, instant booking, all managed online." />
        <link rel="canonical" href={`https://www.homeandgardenmasters.co.uk/services/${singleService?.slug}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home & Garden Masters | Elevating Your Living Spaces To New Heights" />
        <meta property="og:url" content={`https://www.homeandgardenmasters.co.uk/services/${singleService?.slug}`} />
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
