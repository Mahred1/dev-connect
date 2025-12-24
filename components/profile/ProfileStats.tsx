import Image from 'next/image'
import React from 'react'
import StatCard from './StatCard'

const ProfileStats = ({id}:{id:string}) => {
  return (
    <div className='bg-slate-50 rounded-2xl border-2 border-slate-300 px-3  py-4 w-[350px]'>
        <span className='text-xl'>Statistics</span>

        <div className='mt-3'>
           
            <StatCard image={"/icons/jobs.svg"} heading="Profile View" value={1245}/>
            <StatCard image={"/icons/projects.svg"} heading="Projects" value={22}/>
            <StatCard image={"/icons/network.svg"} heading="Connections" value={125}/>
            <StatCard image={"/icons/bell.svg"} heading="Achievments" value={89}/>
        </div>
    </div>
  )
}

export default ProfileStats