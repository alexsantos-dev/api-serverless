'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import axios from 'axios'
import { TodoButtonActionProps } from '@/utils/interfaces/TodoList.interface'
import { useEffect, useState } from 'react'
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

import { Textarea } from '../../ui/textarea'
import { Button, buttonVariants } from '@/components/ui/button'

import { Toaster, toast } from 'react-hot-toast'

const formSchema = z.object({
  title: z
    .string()
    .min(4, {
      message: 'the title must be at least 4 characters',
    })
    .max(200, {
      message: 'maximun title length excited',
    }),
})

type FormSchemaType = z.infer<typeof formSchema>

export default function TodoEditButton({
  id,
  title,
  onAction,
}: TodoButtonActionProps) {
  const [open, setOpen] = useState(false)

  const editTodoEntity: SubmitHandler<FormSchemaType> = async (data) => {
    if (!data.title.trim()) {
      return
    }
    return toast
      .promise(
        axios.patch(
          `${process.env.NEXT_PUBLIC_DEV_URL}/api/todos/${id}`,
          {
            title: data.title,
          },
          {
            headers: {
              'X-Custom-Header': 'self-request',
            },
          }
        ),
        {
          loading: 'Updating...',
          success: 'Todo updated successfully!',
          error: 'Failed to update todo',
        }
      )
      .finally(() => {
        onAction()
        setOpen(false)
      })
  }

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
    },
  })

  useEffect(() => {
    if (open) {
      form.reset({ title })
      form.getValues('title')
    }
  }, [open, title, form])

  return (
    <>
      <Toaster position='top-right' />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={'outline'} className='rounded-lg w-[32px] h-[32px]'>
            ✏️
          </Button>
        </DialogTrigger>
        <DialogContent className='rounded-xl w-[320px] md:w-[380px] h-[260px] absolute'>
          <DialogHeader>
            <DialogTitle>Editar</DialogTitle>
            <DialogDescription>
              Edite seu todo no campo abaixo
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(editTodoEntity)}>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem className='flex flex-col items-end gap-6'>
                    <FormControl>
                      <Textarea
                      className='rounded-lg'
                        maxLength={200}
                        placeholder='Como dizia o filósofo...'
                        {...field}
                      />
                    </FormControl>
                    <DialogFooter className='flex items-center gap-4'>
                      <FormMessage />
                      <DialogClose
                        className={`${buttonVariants({
                          variant: 'default',
                        })} rounded-lg`}
                        disabled={
                          Object.keys(form.formState.errors).length > 0 ||
                          form.getValues('title').trim().length < 4
                        }
                        type='submit'>
                        Salvar
                      </DialogClose>
                    </DialogFooter>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}
