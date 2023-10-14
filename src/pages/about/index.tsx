import { AboutUs, Container, Header, MainHeading, OurMission } from '@/components/imports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
     return (
          <>
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