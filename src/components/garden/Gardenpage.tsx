import React from 'react'
import mainImage from '../../../public/images/main.jpg'
import { Container, MainHeading } from '../imports'

function Gardenpage() {
  return (
    <>
      <main className='mt-32 w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${mainImage.src})` }}>
        


      </main>
     
      <Container className='mt-16'>
               <MainHeading className="white">Meet the Home and Garden Masters Team</MainHeading>
              
        <p className='font-[500] mt-10'>Home and Garden Masters Team is a dedicated group of experts specializing in home and garden improvement. With a wealth of experience in landscaping, interior design, renovation, and outdoor maintenance, we're here to help you transform your living spaces into your dream environment. Our mission is to make your house a home and your garden a sanctuary.</p>

          </Container>
    </>
  )
}

export default Gardenpage