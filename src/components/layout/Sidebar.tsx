import React from 'react'
import { MENU_LIST } from '@/config/navMenu'
import NavItem from './NavItem'

export default function Sidebar() {
  return (
    <div className='md:w-[300px] md:min-w-[300px] md:min-h-screen md:border-r md:p-4'>
      <nav>
        <ul>
          {MENU_LIST.map((menu, index) => (
            <li key={index}>
              <NavItem menu={menu} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
