import React from 'react'
import NavBar from '../../components/navigation/navbar/NavBar'
import MobileSideBar from '@/components/navigation/sidebar/MobileSideBar'
import SideBar from '@/components/navigation/sidebar/SideBar'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>

        <NavBar/>
        <MobileSideBar/>
        <div className='flex '>
          <SideBar/>
        {children}
        </div>
        
    </main>
  )
}

export default RootLayout