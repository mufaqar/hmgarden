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
          avatar: "/images/avatar1.png",
          title: "Amazing service, above and beyond",
          review: "I used them for an end of tenancy clean, and they did a fantastic job. It turned out to be bigger than expected, but they remained professional, and bent over backwards to make sure I got what I wante ... read more",
          name: "Andrew Thorburn",
     },
     {
          avatar: "/images/avatar2.png",
          title: "Amazing service, above and beyond",
          review: "Far exceeded my expectations - my gardeners were professional, friendly and found time to do my front garden as well as my back! I could not be more impressed with how they handled the job. I will cer ... read more",
          name: "Jasmine Pengelly"
     },
     {
          avatar: "/images/avatar3.png",
          title: "Amazing service, above and beyond",
          review: "Punctuality Phone call On arrival Cheerful welcome Very helpful and they did a very thorough job My carpets are cleaner than I thought possible so job exceeded expectations Thank You",
          name: "Diana Farragher"
     }
]