'use client'
import { Mail, Shield, Layout, Search } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

function SideBarNav() {
  const menuList = [
    {
      id: 1,
      name: 'Browse',
      icon: Search,
      path: '/browse'
    },
    {
      id: 2,
      name: 'Dashboard',
      icon: Layout,
      path: '/dashboard'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    },
    {
      id: 4,
      name: 'Newsletter',
      icon: Mail,
      path: '/newsletter'
    }
  ]
  const [ activeIndex, setActiveIndex ] = useState(0)
  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
      <div className='p-5 border-b'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={170}
          height={100}
        />
      </div>
      <div className='flex flex-col'>
        {menuList.map((item, index) => (
          <div
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer ${activeIndex == index ? 'bg-purple-50 text-purple-800' : null}`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon/>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBarNav