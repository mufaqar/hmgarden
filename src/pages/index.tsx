import { Container, Header, Main, MainHeading, Review, ServiceArea, ServiceCard } from '@/components/imports'
import Image from 'next/image'
import { Services, ServicesSteps } from '@/const/services'
import { IService } from '@/utils/types'
import background from '../../public/images/stepbg.png'
import StepCard from '@/components/card/step.card'
import Link from 'next/link'

interface IServicesSteps {
  icon: string,
  title: string,
  content: string
}

export default function Home() {
  return (
    <>
      <Header white />
      <Main />
      <section className='mt-16 mb-40'>
        <Container>
          <MainHeading>Our services</MainHeading>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-20'>
            {
              Services.slice(0,7).map((service: IService, idx: number) => {
                return (
                  <ServiceCard data={service} key={idx} />
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
              ServicesSteps.map((item: IServicesSteps, idx: number) => (
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
            <MainHeading className="!text-left md:!leading-[60px]">What makes your service H&M Garden Masters?</MainHeading>
            <ul className='text-lg list-disc font-light mt-5 pl-5'>
              <li className='mt-4'>Same- & next-day visits</li>
              <li className='mt-4'>7 days-a-week availability</li>
              <li className='mt-4'>Fixed price & instant no-obligation quotes</li>
              <li className='mt-4'>Dedicated & insured service specialists</li>
              <li className='mt-4'>No contracts for regular services</li>
              <li className='mt-4'>Easily manage your bookings online</li>
              <li className='mt-4'>Extra perks with the Fantastic Club</li>
            </ul>
          </div>
          <div>
            <Image src="/images/img.png" alt="image" width={798} height={532} />
          </div>
        </Container>
      </section>
      <Review black/>
      <ServiceArea />
      <section className='bg-black text-white py-20'>
        <Container className="grid md:grid-cols-2 items-center">
            <div>
              <MainHeading className="!text-left md:!leading-[60px]">Start your own franchise business with H&M Garden Masters Services</MainHeading>
              <p className='max-w-[500px] mb-20 mt-4'>Develop your own successful business by investing in a proven franchise model that takes all risks out and provides full support. A business of your own but not on your own.</p>
              <Link href="/get-a-quote" className={`border p-2 px-7 rounded-[6px] bg-white !text-black `}>Request a Quote</Link>
            </div>
            <div>
              <img src="/images/watercane.png" alt=""/>
            </div>
        </Container>
      </section>
    </>
  )
}
