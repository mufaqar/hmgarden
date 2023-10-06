import React from 'react'
import Textpage from '@/components/text/textpage'
import { Header } from '../../components/imports'
import Heropage from '@/components/hero/heropage'
import BlogMain from '@/components/main/blogMain'


function SlugPage() {
  return (
    <div>
      <Header white />
      <BlogMain data={data} />
      <Heropage />
      <Textpage />
    </div>
  )
}

export default SlugPage

const data = {
  title: "Advice hub",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non blandit massa enim.",
  image: "/images/blogimag.png",
  bg: "/images/blogbg.png"
}