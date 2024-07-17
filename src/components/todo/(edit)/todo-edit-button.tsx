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
import TodoEditForm from './todo-edit-form'
import axios from 'axios'
import { localUrl } from '@/utils/consts'
import { TodoButtonActionProps } from '@/utils/interfaces/TodoList.interface'
import { toast } from 'sonner'

export default function TodoEditButton({
  id,
  title,
  onAction,
}: TodoButtonActionProps) {
  const editTodoEntity = async (data: { title: string }) => {
    if (!data.title.trim()) {
      return
    }
    await axios.patch(`${localUrl}/api/todos/${id}`, data)
    onAction()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} className='w-[32px] h-[32px]'>
          ✏️
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[400px] h-[260px]'>
        <DialogHeader>
          <DialogTitle>Editar</DialogTitle>
          <DialogDescription>Edite seu todo no campo abaixo</DialogDescription>
        </DialogHeader>
        <TodoEditForm SubmitForm={editTodoEntity} title={title} />
      </DialogContent>
    </Dialog>
  )
}
