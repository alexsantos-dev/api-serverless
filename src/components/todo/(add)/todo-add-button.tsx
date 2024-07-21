'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Textarea } from '../../ui/textarea'

import axios from 'axios'
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

export default function TodoAddButton({
  onAction,
}: {
  onAction: () => Promise<void>
}) {
  const addTodoEntity: SubmitHandler<FormSchemaType> = async (data) => {
    if (!data.title.trim()) {
      return
    }
    return toast
      .promise(
        axios.post(
          `${process.env.NEXT_PUBLIC_DEV_URL}/api/todos`,
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
          loading: 'Saving...',
          success: 'Todo saved successfully!',
          error: 'Failed to save todo',
        }
      )
      .finally(() => {
        onAction()
      })
  }

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  })

  return (
    <>
      <Toaster position='top-right' />
      <Dialog>
        <DialogTrigger asChild>
          <Button className='rounded-lg w-[310px] md:w-[370px] h-[48px]'>
            Adicionar
          </Button>
        </DialogTrigger>
        <DialogContent className='rounded-xl w-[320px] md:w-[380px] h-[260px] absolute'>
          <DialogHeader>
            <DialogTitle>Adicionar</DialogTitle>
            <DialogDescription>
              Adicione seu todo no campo abaixo
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(addTodoEntity)}>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => (
                  <FormItem className='flex flex-col gap-6 items-end'>
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
