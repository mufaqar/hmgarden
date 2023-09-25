import React from 'react'

const Container = ({children, className}:any) => {
  return (
    <div className={`container mx-auto px-3 ${className}`}>{children}</div>
  )
}

export default Container