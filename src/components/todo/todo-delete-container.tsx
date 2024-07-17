'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import TodoDeleteButton from './todo-delete-button'
import axios from 'axios'
import { localUrl } from '@/utils/consts'

export default function TodoDeleteContainer({ id }: { id: string }) {
  const deleteTodoEntity = async () => {
    await axios.delete(`${localUrl}/api/todos/${id}`)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' className='w-[20px] h-[24px]'>
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
          <TodoDeleteButton DeleteAction={deleteTodoEntity} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
