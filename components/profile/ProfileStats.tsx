import Image from 'next/image'
import React from 'react'

const ProfileStats = ({id}:{id:string}) => {
  return (
    <div className='bg-slate-50 rounded-2xl border-2 border-slate-300 px-3  py-4 w-[350px]'>
        <span className='text-xl'>Statistics</span>

        <div className='mt-3'>
            <div className='flex gap-3  items-center '>
                <div className='relative w-10 h-10'>
                <Image className='bg-red-100  rounded-md p-2'  src="/icons/jobs.svg" fill alt="Profile View" />

                </div>
                <div className='flex flex-col'>
                    <span className='text-slate-600'>Profile View</span>
                    <span className='text-md'>1,245</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileStats