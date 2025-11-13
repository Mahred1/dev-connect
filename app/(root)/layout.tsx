import React from 'react'
import NavBar from '../../components/navigation/navbar/NavBar'
import MobileSideBar from '@/components/navigation/sidebar/MobileSideBar'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
        <NavBar/>
        <MobileSideBar/>
        {children}
    </main>
  )
}

export default RootLayout