'use client'

import { useRouter } from "next/navigation"

export default function Logo() {
  const router= useRouter
  
  return (
    <div className='hidden md:block cursor-pointer '>
      <img src="/Images/lunchera-web-logo.png" alt="Lunchera"  className='w-32 h-auto bg-blue-600'/>
    </div>
  )
}
