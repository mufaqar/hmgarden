import { Container, Header, Main, ServiceCard } from '@/components/imports'
import Image from 'next/image'
import { Services } from '@/const/services'
import { IService } from '@/utils/types'



export default function Home() {
  return (
    <>
      <Header white />
      <Main />
      <section className='mt-12 mb-20'>
        <Container>
          <h2 className='text-center text-5xl font-semibold mb-20'>Our services</h2>
          <div>
            {
              Services.map((service: IService, idx: number) => {
                return (
                  <ServiceCard data={service} key={idx} />
                )
              })
            }
          </div>

        </Container>
      </section>
    </>
  )
}
