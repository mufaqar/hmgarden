import {
  CategoriesList,
  Container,
  Header,
  MainHeading,
} from '@/components/imports';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Home & Garden Masters </title>
        <meta
          name="description"
          content="Transforming properties with 6 Years of Expertise With six years of dedicated experience"
        />
      </Head>
      <Header black />
      <Container className="py-20 flex flex-col items-center">
        <MainHeading>Who we are?</MainHeading>
        <p className="mt-4 text-center max-w-[800px]">
          6 Years of Proven Experience: With six years of dedicated experience,
          we have a proven track record of delivering high-quality results. Our
          extensive experience enables us to tackle a wide range of projects
          with confidence and expertise.
        </p>
        <Link
          href="/get-a-quote"
          className={`border p-1 mt-8 px-8 border-black bg-black !text-white `}
        >
          Request a Quote
        </Link>
        <p className="mt-3 text-center">Feel free to contact with us</p>
      </Container>
      <section className="bg-black">
        <div className="container mx-auto px-4 items-center justify-center py-32">
          <div className="w-full border text-white flex flex-col md:flex-row items-center text-center justify-center mx-auto gap-10 border-none">
            <div className="lg:w-[396px] w-full flex flex-col items-center justify-center border border-none">
              <Image
                src="/images/Group.svg"
                alt=""
                width={410}
                height={690}
                className="w-[87px]  py-3"
              />
              <div>
                <h4 className="text-[24px] font-[400]">Get a quote</h4>
                <p className="text-[16px] font-[400]">
                  You will be redirected to our Help Centre to get your quote
                </p>
              </div>
            </div>
            <div className="lg:w-[440px] w-full flex flex-col items-center justify-center mt-5 lg:mt-0 border border-none">
              <Image
                src="/images/Group (3).svg"
                alt=""
                width={410}
                height={690}
                className="w-[87px]  py-3"
              />
              <div>
                <h4 className="text-[24px] font-[400]">Your Bookings</h4>
                <p className="text-[16px] font-[400]">
                  You will be redirected to our Help Centre to get information
                  on how to easily manage your bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategoriesList />
    </>
  );
};

export default About;
