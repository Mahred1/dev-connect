import { Button } from '@/components/ui/button'
import React from 'react'

const SideBarActions = () => {
  return (
    <div className='flex flex-col w-[80%] gap-3'>
        <Button variant={'default'} className='bg-teal-500 text-white py-5 text-md ' >Create Project</Button>
        <Button className='text-md py-5 bg-white border-slate-400'  variant={"outline"}>Post a Job</Button>
    </div>
  )
}

export default SideBarActions