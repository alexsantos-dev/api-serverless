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
    <div className='flex-col  w-[360px] h-[56px] pt-1 pb-1 pl-0 pr-0 '>
      <div className='w-full flex rounded-md '>
        <div className='w-[270px] flex items-center p-1'>
          <p className='overflow-hidden text-ellipsis text-nowrap '>{title}</p>
        </div>
        <div className='w-[90px] flex items-center justify-center '>
          <div className='flex gap-4 '>
            <TodoEditButton id={id} title={title} onAction={onAction} />
            <TodoDeleteButton id={id} onAction={onAction} />
          </div>
        </div>
      </div>
      <Separator className='mt-2' />
    </div>
  )
}
