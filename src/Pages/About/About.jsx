import React from 'react'
import Header from '../../Components/Header'
import usePageTitle  from '../../Components/UseTitle'

export default function About() {
  usePageTitle('About Us');
  return (
    <div className="min-h-screen w-[100vw] bg-gray-950 text-white">
           <Header />
       </div>
  )
}
