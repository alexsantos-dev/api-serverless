'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import axios from 'axios'
import { TodoDeleteButtonProps } from '@/utils/interfaces/TodoList.interface'

export default function TodoDeleteButton({
  id,
  onAction,
}: TodoDeleteButtonProps) {
  const deleteTodoEntity = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_DEV_URL}/api/todos/${id}`, {
      headers: {
        'X-Custom-Header': 'self-request',
      },
    })
    onAction()
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' className='w-[32px] h-[32px]'>
          🗑️
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='flex flex-col justify-center items-center w-[400px] h-[140px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja apagar esse item?</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex gap-3'>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={deleteTodoEntity}
            className={buttonVariants({ variant: 'destructive' })}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
