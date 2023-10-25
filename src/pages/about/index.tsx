import { AboutUs, Container, Header, MainHeading, OurMission } from '@/components/imports'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
     return (
          <>
               <Head>
                    <title>About Us | Home & Garden Masters </title>
                    <meta name="description" content="Transforming properties with 6 Years of Expertise" />
                    <link
                         rel="canonical"
                         href="https://www.homeandgardenmasters.co.uk/about"
                    />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Home" />
                    <meta
                         property="og:description"
                         content="Book A Service For Your Home, Office Or Garden."
                    />
                    <meta
                         property="og:url"
                         content="https://www.homeandgardenmasters.co.uk/about"
                    />
                    <meta property="og:site_name" content="Home & Garden Mastersg" />
                    <meta
                         property="article:publisher"
                         content="https://www.facebook.com/profile.php?id=61551956996609"
                    />
                    <meta
                         property="article:modified_time"
                         content="2023-07-06T22:58:46+00:00"
                    />
                    <meta
                         property="og:image"
                         content="https://hgm.amazingpestsolution.co.uk/wp-content/uploads/2023/10/shutterstock_1794449392.png"
                    />
                    <meta property="og:image:width" content="344" />
                    <meta property="og:image:height" content="184" />
                    <meta property="og:image:type" content="image/jpng" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@homeandgardenmasters" />
                    <meta name="twitter:label1" content="Est. reading time" />
                    <meta name="twitter:data1" content="10 minutes" />
               </Head>
               <Header black />

               <AboutUs />
               <Container className="py-20 flex flex-col items-center max-w-[960px]">
                    <MainHeading>Why Choose Us?</MainHeading>
                    <p className='mt-4 text-center '><strong>Competitive and Reliable Pricing:</strong> Home&Garden Masters offers pricing that not only fits your budget but also provides excellent value for your investment. Our transparent and competitive rates ensure that you receive the best services without breaking the bank.</p>

                    <p className='mt-4 text-center '><strong>6 Years of Proven Experience: </strong>With six years of dedicated experience, we have a proven track record of delivering high-quality results. Our extensive experience enables us to tackle a wide range of projects with confidence and expertise.</p>

                    <p className='mt-4 text-center '>
                         <strong> Fully Trained and Professional Teams:</strong> Our teams are comprised of highly skilled and trained professionals who are passionate about what they do. They bring expertise, creativity, and professionalism to every project, ensuring your satisfaction.
                    </p><p className='mt-4 text-center '>
                         <strong>  Comprehensive Insurance Coverage:</strong> Home&Garden Masters takes the safety of your property seriously. We are fully insured, providing you with peace of mind knowing that your investment and property are protected throughout the duration of our services.
                    </p><p className='mt-4 text-center '>
                         <strong>  Commitment to Sustainability:</strong> We prioritize eco-friendly practices and materials, contributing to a greener and more sustainable environment. Our dedication to sustainability reflects our responsibility towards the community and the planet.
                    </p><p className='mt-4 text-center '>
                         <strong>  Customer-Centric Approach:</strong> Your needs and preferences are our top priority. We collaborate closely with you, ensuring that our services are tailored to meet your specific requirements and expectations.
                    </p><p className='mt-4 text-center '>
                         <strong>   Exceptional Workmanship: </strong>Our commitment to quality is unwavering. We take pride in delivering exceptional workmanship in every project, using top-tier materials and attention to detail to ensure lasting results.
                    </p><p className='mt-4 text-center '>
                         <strong>  Comprehensive Service Offerings:</strong> Whether it's transforming your outdoor spaces, enhancing your interiors, or maintaining your property, Home&Garden Masters offers a comprehensive range of services, simplifying your home and garden improvement needs under one roof
                    </p>

               </Container>
               <OurMission />
               <Container className="grid md:grid-cols-2 items-center ">
                    <div>
                         <MainHeading className="md:!text-left mb-4 !text-3xl">Our First Brand</MainHeading>
                         <p className="text-center md:text-left">Our first brand was established in the year of 2017. Fusing modern technology with quality customer care, it is tailored to meet your home or garden needs from start to finish. Find out more at our Home&Garden Masters website.</p>
                    </div>
                    <div className='md:p-10'>
                         <Image src="/images/3d-forest.png" alt="" width={666} height={666} />
                    </div>
               </Container>

          </>
     )
}

export default About