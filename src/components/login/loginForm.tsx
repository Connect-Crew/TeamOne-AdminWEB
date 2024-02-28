'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface LoginFormData {
  username: string
  password: string
}

export default function LoginForm() {
  const loginSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(10).max(20),
  })

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginFormData) => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem className='pb-4'>
              <FormLabel className='text-scyGray-900'>아이디</FormLabel>
              <FormControl>
                <Input
                  className='h-[56px] bg-scyGray-100 border-scyGray-400'
                  placeholder='아이디를 입력하세요.'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-scyGray-900'>비밀번호</FormLabel>
              <FormControl>
                <Input
                  className='h-[56px] bg-scyGray-100 border-scyGray-400'
                  placeholder='비밀번호를 입력하세요.'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full h-[54px] mt-10 text-lg'>
          로그인
        </Button>
      </form>
    </Form>
  )
}
