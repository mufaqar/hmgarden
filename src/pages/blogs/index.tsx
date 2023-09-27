import React from 'react'
import Heropage from '@/components/hero/heropage'
import Blog2 from '@/components/mainblog2/blog2'
import Linkpage from '@/components/link/linkpage'
import BlogMain from '@/components/main/blogMain'
import { Header } from '@/components/imports'


function Blogs() {
  return (
    <div>
      <Header white />
      <BlogMain data={data} />
      <Heropage />
      <Blog2 />
      <Linkpage />
    </div>
  )
}

export default Blogs

const data = {
  title: "Advice hub",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim.",
  image: "/images/blogimag.png",
  bg: "/images/blogbg.png"
}