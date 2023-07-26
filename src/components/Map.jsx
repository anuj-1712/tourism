import React from 'react'

export default function Map() {
  return (
    <div className='mx-4 mt-20 lg:mt-12 mb-4'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065559.168108018!2d73.5596317219186!3d22.798201136168178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1690355487462!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-[400px] w-full mb-4'></iframe>
      <button className='bg-blue-500 rounded text-white text-sm sm:text-xl px-2 py-2 font-medium hover:scale-[1.1]'>Near me</button>
    </div>
  )
}
