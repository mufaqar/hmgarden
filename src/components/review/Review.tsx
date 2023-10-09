import React from 'react'
import { Container, MainHeading, ReviewCard } from '../imports'

const Review = ({black}:any) => {
  return (
    <section className={`${black && 'bg-black text-white'} py-16`}>
          <Container>
               <MainHeading className="white">What clients are saying...</MainHeading>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-28 gap-10'>
                    {
                         reviewData.map((r:IReview,i:number)=>(
                              <ReviewCard data={r} key={i}/>
                         ))
                    }
                    
               </div>
          </Container>
    </section>
  )
}

export default Review

interface IReview {
     avatar: string,
     title: string,
     review: string,
     name: string,
}

const reviewData = [
    
     {
          avatar: "/images/michle.jpg",
          title: "Customer",
          review: "The team was punctual, professional, and courteous, and they went above and beyond to ensure that my home looked its best. They used state-of-the-art equipment and environmentally friendly cleaning solutions to remove years of built-up dirt, grime, and other pollutants from my home's exterior. Thank you for the exceptional work.",
          name: "Michael"
     },
     {
          avatar: "/images/rashid.jpg",
          title: "Customer",
          review: "I recently used the power washing services from this company and I couldn't be happier with the results. My driveway was stained and discolored from years of use, but after the team was finished with it, it looked brand new! The entire process was hassle-free, and the team was professional, courteous, and efficient. Overall, I would highly recommend this company to anyone in need of power washing services. The results were outstanding, the team was fantastic, and the prices were affordable. Thank you for the excellent work!",
          name: "Rashid"
     },
     {
          avatar: "/images/sara.jpg",
          title: "Customer",
          review: "My conservatory had been neglected for years, and it had become an eyesore on my property. But after the team was finished with it, it looked brand new! They exceeded my expectations, and I will definitely be using their services again in the future. Thank you for the outstanding work!",
          name: "Sarah",
     }
]