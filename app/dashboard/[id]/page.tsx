import React from 'react'
import Nav from '@/components/navbar/navbar'
import Chatlink from '@/components/chatlink'
import Inbox from '@/components/Inbox'
function page({ params }: { params: { id: string } }) {
    let a = params.id
  return (
    <>
    <nav className=' text-2xl font-semibold  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <Nav />
       </nav>
    <div className=''>
    <Inbox />
    <div>
    <Chatlink />
    </div>
    </div>
    <footer className=' absolute inset-x-0 bottom-0 self-center text-center'>footer</footer>
    </>
  )
}

export default page