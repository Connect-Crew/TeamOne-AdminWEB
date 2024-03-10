import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header title='Team One admin Page' />
      <div className='flex justify-between'>
        <Sidebar />
        <main className='w-full h-full p-4'>{children}</main>
      </div>
    </div>
  )
}
