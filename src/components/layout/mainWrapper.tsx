import React from 'react'

interface mainLayoutProps {
    children?:React.ReactNode
}

const MainWrapper = ({children}:mainLayoutProps) => {
  return (
    <div className="main-wrapper">{children}</div>
  )
}

export default MainWrapper