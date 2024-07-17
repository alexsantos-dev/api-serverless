'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import TodoForm from './todo-form'
import axios from 'axios'
import { localUrl } from '@/utils/consts'

interface TodoEditButtonProps {
  id: string
  title: string
}

export default function TodoEditButton({ id, title }: TodoEditButtonProps) {
  const editTodoEntity = async (data: { title: string }) => {
    if (!data.title.trim()) {
      return
    }
    await axios.patch(`${localUrl}/api/todos/${id}`, data)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className='w-[20px] h-[24px]'>
          ✏️
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[400px] h-[260px]'>
        <DialogHeader>
          <DialogTitle>Editar</DialogTitle>
          <DialogDescription>Edite seu todo no campo abaixo</DialogDescription>
        </DialogHeader>
        <TodoForm SubmitForm={editTodoEntity} title={title}/>
      </DialogContent>
    </Dialog>
  )
}
