import { welcomeNavigation } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed flex justify-between items-center bg-sky-500 w-full px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image src='/icons/favicon.png' width={28} height={28} alt='gitimpact-logo' className='hidden max-sm:size-8'/>
        <p className='text-[24px] font-extrabold text-white'> GitImpact ▸</p>
      </Link>

      <div></div>
    </div>
  )
}

export default Navbar