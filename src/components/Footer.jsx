import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"

export default function Footer() {
  return (
    <div className='mt-12 flex flex-col'>
      <div className='bg-black py-8 px-6 flex flex-col gap-4'>
        <h3 className='text-center text-3xl text-[#21AEEB] font-medium'>List your tourism services for free</h3>
        <p className='text-center text-white'>Thrill tourism is an online platform that enables tourists to directly connect with hosts, without any commission fees.</p>
        <button className='bg-[#176CED] text-white font-bold h-[40px] px-2 w-11/12 max-w-[500px] min-w-[220px] mx-auto rounded-md'>Publish an add for free</button>
      </div>
      <div className='mx-auto'>
        <div className='text-xs text-black flex items-center gap-1'>2023 <AiOutlineCopyrightCircle/> Thrill Tourism |  Privacy Policy | Terms and Conditions</div>
      </div>
    </div>
  )
}
