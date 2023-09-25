import React from 'react'

const MainHeading = ({children, className}:any) => {
  return (
    <div className={`${className} text-3xl md:text-4xl lg:text-5xl font-semibold text-center`}>{children}</div>
  )
}

export default MainHeading