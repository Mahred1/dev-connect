import React from 'react'
import NavBar from '../components/navigation/navbar/NavBar'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default RootLayout