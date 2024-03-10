'use client'

import { useMemo, useCallback, useState } from 'react'
import { usePathname } from 'next/navigation'

import { MenuListType } from '@/config/navMenu'

// import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { ChevronDown } from 'lucide-react'

interface Props {
  menu: MenuListType
}

export default function NavItem({ menu }: Props) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isSubMenuPath: boolean = useMemo(
    () => menu.items.some((menu) => menu.path === pathname),
    [menu, pathname]
  )

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <Collapsible open={isOpen}>
      <CollapsibleTrigger
        className={`group h-[56px] cursor-pointer text-gray-700 ${
          isSubMenuPath && 'bg-red text-scyWhite font-bold'
        }`}
        onClick={toggle}
        asChild
      >
        <div className={`flex justify-between items-center px-5 py-4 `}>
          <Button variant='link' className='text-inherit text-base p-0 bg-inherit'>
            {menu.group}
          </Button>
          <ChevronDown className='group-data-[state=open]:rotate-180' width={18} height={18} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className='flex flex-col justify-between gap-5 px-10 py-3 bg-inherit'>
          {menu.items.map((menu) => (
            <Link key={menu.name} href={menu.path ?? ''} className='flex h-[19px] items-center'>
              <Button
                variant='link'
                className={`text-base p-0 bg-inherit hover:bg-inherit ${
                  menu.path === pathname ? 'text-red' : 'text-scyGray-400'
                }`}
              >
                {menu.name}
              </Button>
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
