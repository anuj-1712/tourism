import React from 'react'
import {Blogs_data} from "../Data"
import {CiLocationOn} from "react-icons/ci"
import { IconContext } from 'react-icons'

export default function Blogs() {
  return (
    <div className='flex flex-col gap-8 mt-8'>
      <h2 className='mx-4 text-3xl font-medium'>Blogs</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-8'>
      {
        Blogs_data.map((element,index)=>{
            return(
                <div key={index} className='h-[350px] px-4 py-4 shadow-md rounded-[7px] hover:border-2 hover:cursor-pointer'>
                <img src={element.imageUrl} className='w-full h-[70%] rounded-lg'/>
                <div className='flex justify-between w-full mt-6'>
                    <p className='font-bold'>{element.place.length>15 ? `${element.place.slice(0,15)}...` : element.place}</p>
                    <div className='flex gap-1 items-center'>
                    <IconContext.Provider value={{style:{color:"#F11A7B",height:"1.5rem",width:"1.5rem"}}}>
                    <CiLocationOn/>
                    </IconContext.Provider>
                    <p className='text-sky-500'>{element.city}</p>
                    </div>
                </div>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}
