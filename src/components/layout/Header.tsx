import React from 'react'
import { Button } from '../ui/button'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <div className='w-full h-full p-4 border-black border-b-2'>
        <div className='flex justify-center items-center text-xl relative'>
          {title}
          <div className='absolute right-0'>
            <Button>로그아웃</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
