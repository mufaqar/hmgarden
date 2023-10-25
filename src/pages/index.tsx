import { Container, Header, Main, MainHeading, Review, ServiceArea, ServiceCard } from '@/components/imports'
import Image from 'next/image'
import { MainServices, ServicesSteps } from '@/const/services'
import { IService } from '@/utils/types'
import background from '../../public/images/stepbg.png'
import StepCard from '@/components/card/step.card'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import apolloClient from '@/config/client'
import { Types } from '@/config/query'
import Head from 'next/head'


export default function Home({ allTypes }: any) {
  return (
    <>
      <Head>
        <title>Home & Garden Masters | Elevating Your Living Spaces To New Heights</title>
        <meta name="description" content="Home & Garden Masters | Elevating Your Living Spaces To New Heights" />
        <link rel="canonical" href="https://www.homeandgardenmasters.co.uk/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home" />
        <meta property="og:description" content="Home & Garden Masters | Elevating Your Living Spaces To New Heights" />
        <meta property="og:url" content="https://www.homeandgardenmasters.co.uk/" />
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
        <meta name="google-site-verification" content="tMtrWqKqeIoil2r4DagWr5mth0rG3nFa2nVlu7mCc7w" />

      </Head>
      <Header white />
      <Main />
      <section className='mt-16 mb-40'>
        <Container>
          <MainHeading>Our services</MainHeading>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-20'>
            {
              allTypes.map((service: any, idx: number) => {
                return (
                  <>
                    <div key={idx} className="relative w-full serviceCard-shadow group">
                      <Image src={service?.servicesTypeInfo?.image?.mediaItemUrl} alt={service.name} width={344} height={187} className='w-full h-full object-cover' />
                      <div className='absolute group-hover:h-full  bottom-0 bg-black/40  flex flex-col justify-center items-center p-3 text-white w-full transition-all duration-500 ease-in-out text-center'>
                        <Link href={`/services?type=${service.name}`} className='cursor-pointer text-xl'> {service.name}</Link>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </Container>
      </section>
      <section className='relative py-32 bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${background.src})` }}>
        <Container className="flex relative z-10 flex-col items-center">
          <MainHeading className='text-white max-w-[800px] '>How Home & Garden Masters Services works</MainHeading>
          <div className='grid md:grid-cols-3 w-full my-24 gap-10'>
            {
              ServicesSteps.map((item: any, idx: number) => (
                <StepCard data={item} key={idx} id={idx} />
              ))
            }
          </div>
        </Container>
        <div className='absolute inset-0 bg-black/50' />
      </section>
      <section>
        <Container className="grid md:grid-cols-2 gap-12 my-20 items-center">
          <div>
            <MainHeading className="!text-left md:!leading-[60px]">What makes your service Home&Garden Masters?</MainHeading>
            <ul className='text-lg list-disc font-light mt-5 pl-5'>
              <li className='mt-4'>Same- & next-day visits</li>
              <li className='mt-4'>7 days-a-week availability</li>
              <li className='mt-4'>Fixed price & instant no-obligation quotes</li>
              <li className='mt-4'>Dedicated & insured service specialists</li>
              <li className='mt-4'>No contracts for regular services</li>
              <li className='mt-4'>Easily manage your bookings online</li>

            </ul>
          </div>
          <div>
            <Image src="/images/img.png" alt="image" width={798} height={532} />
          </div>
        </Container>
      </section>
      <Review black />
      <ServiceArea />
      {/* <section className='bg-black text-white py-20'>
        <Container className="grid md:grid-cols-2 items-center">
          <div>
            <MainHeading className="!text-left md:!leading-[60px]">
              Develop your own successful business by investing in a proven franchise model that takes all risks out and provides full support. A business of your own but not on your own.</MainHeading>
<br/>
            <Link href="/get-a-quote" className={` mt-5 border p-2 px-7 rounded-[6px] bg-white !text-black `}>Request a Quote</Link>
          </div>
          <div>
            <img src="/images/watercane.png" alt="" />
          </div>
        </Container>
      </section> */}
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const [typesRes] = await Promise.all([
    apolloClient.query({ query: Types }),
  ]);
  const allTypes = typesRes?.data.types.nodes
  return {
    props: {
      allTypes
    },
  };
}