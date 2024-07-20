import { Separator } from '../../ui/separator'
import TodoDeleteButton from '../(delete)/todo-delete-button'
import TodoEditButton from '../(edit)/todo-edit-button'
import { TodoButtonActionProps } from '@/utils/interfaces/TodoList.interface'

export default function TodoListItem({
  id,
  title,
  onAction,
}: TodoButtonActionProps) {
  return (
    <div className='flex flex-col w-[300px] md:w-[360px] h-[56px]'>
      <div className='w-full flex rounded-md justify-between gap-4'>
        <div className='w-[200px] md:w-[260px] flex items-center'>
          <p className='overflow-hidden text-ellipsis text-nowrap '>{title}</p>
        </div>
        <div className='w-[80px] flex items-center justify-center'>
          <div className='w-full flex justify-between'>
            <TodoEditButton id={id} title={title} onAction={onAction} />
            <TodoDeleteButton id={id} onAction={onAction} />
          </div>
        </div>
      </div>
      <Separator className='mt-2' />
    </div>
  )
}
