import Image from 'next/image'
import React from 'react'

const StatCard = ({image,heading,value}:{image:string,heading:string,value:number}) => {
  return (
     <div className='flex gap-3  items-center mb-4'>
                <div className='relative w-10 h-10'>
                <Image className='bg-red-100  rounded-md p-2'  src={image} fill alt="Profile View" />

                </div>
                <div className='flex flex-col'>
                    <span className='text-slate-600'>{heading}</span>
                    <span className='text-md'>{value}</span>
                </div>
            </div>
  )
}

export default StatCard