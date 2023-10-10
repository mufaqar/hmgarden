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
          review: "Thank you Home&Garden Masters company The technician came on booked time and he was friendly very explicit regarding what he will do and what we have to do forward. I  highly recommend. ",
          name: "Michael"
     },
     {
          avatar: "/images/rashid.jpg",
          title: "Customer",
          review: "I had a mouse (or more ,not sure)  but after first visit  didn't see it anymore.I It's been 3 months since then. Happy to recommend for everyone. 					",
          name: "Peter Stump"
     },
     {
          avatar: "/images/sara.jpg",
          title: "Customer",
          review: " Nothing to say more than:  Profesional,friendly and reliable cost.Thanks Home&Garden Masters",
          name: "Sarah",
     }
]