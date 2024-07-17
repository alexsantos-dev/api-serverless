'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import axios from 'axios'
import { localUrl } from '@/utils/consts'
import TodoAddForm from './todo-add-form'

export default function TodoAddButton({
  onAction,
}: {
  onAction: () => Promise<void>
}) {
  const addTodoEntity = async (data: { title: string }) => {
    if (!data.title.trim()) {
      return
    }
    await axios.post(`${localUrl}/api/todos`, data)
    onAction()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-[370px] h-[48px]'>Adicionar</Button>
      </DialogTrigger>
      <DialogContent className='w-[400px] h-[260px]'>
        <DialogHeader>
          <DialogTitle>Adicionar</DialogTitle>
          <DialogDescription>
            Adicione seu todo no campo abaixo
          </DialogDescription>
        </DialogHeader>
        <TodoAddForm SubmitForm={addTodoEntity} />
      </DialogContent>
    </Dialog>
  )
}
