import { Container, Header } from '@/components/imports'
import React from 'react'
import mainImage from '../../../public/images/blogbg.png'
import BlogMain from '@/components/main/blogMain'

const Blog = () => {
  return (
   <>
          <Header white />
          <BlogMain data={data}/>
   </>
  )
}

export default Blog

const data = {
     title: "Advice hub",
     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim.",
     image: "/images/blogimag.png",
     bg: "/images/blogbg.png"
}