import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Blogs_data } from "../Data"

export default function BlogPage() {
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    
    useEffect(()=>{
        setBlog(Blogs_data[id])
    },[id, setBlog])
  return (
    <div className='flex flex-col gap-4 items-center max-w-[1200px] mx-auto w-[90%] py-8'>
      <p className='font-bold text-2xl'>{blog.title}</p>
      <p className=' self-start'><strong>Date : </strong>{blog.date}</p>
      <img src={blog.imageUrl} className='h-[400px] w-full'/>
      <p className=''>{blog.description}</p>
    </div>
  )
}
