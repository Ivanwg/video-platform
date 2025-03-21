'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { createCourseAction } from '../actions'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'

const createCourseFormSchema = z.object({
  name: z.string(),
  desc: z.string(),
})

export function CreateCourseForm({
  className,
  revalidatePagePath,
}: {
  className: string
  revalidatePagePath: string
}) {
  const [isCreateTransiton, startCreateTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: '',
      desc: '',
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCourseAction(data, revalidatePagePath)
          })
        })}
        className={cn('space-y-4', className)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl>
                <Input placeholder='название...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='desc'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder='описание...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-8' type='submit' disabled={isCreateTransiton}>
          Добавить
        </Button>
      </form>
    </Form>
  )
}
