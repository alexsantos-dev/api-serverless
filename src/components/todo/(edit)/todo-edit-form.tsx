'use client'

import { useEffect } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { DialogFooter } from '@/components/ui/dialog'
import { Textarea } from '../../ui/textarea'
import { Button } from '../../ui/button'
import TodoSaveToaster from '../(toasters)/todo-save-toaster'

const formSchema = z.object({
  title: z.string().min(4, {
    message: 'the title must be at least 4 characters',
  }),
})

type FormSchemaType = z.infer<typeof formSchema>

interface TodoFormProps {
  SubmitForm: SubmitHandler<FormSchemaType>
  title: string
}

export default function TodoEditForm({ SubmitForm, title }: TodoFormProps) {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  })

  useEffect(() => {
    form.setValue('title', title)
  }, [title, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(SubmitForm)}>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='flex flex-col gap-6'>
              <FormControl>
                <Textarea
                  maxLength={400}
                  placeholder='Como dizia o filósofo...'
                  {...field}
                  value={field.value}
                />
              </FormControl>
              <DialogFooter className='flex items-center gap-4'>
                <FormMessage />
                <TodoSaveToaster />
              </DialogFooter>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
