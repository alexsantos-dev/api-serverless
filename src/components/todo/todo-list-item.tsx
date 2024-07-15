import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import DeleteButton from './todo-delete-button'
import EditButton from './todo-edit-button'

export default function TodoListItem() {
  return (
    <div className='flex-col  w-[360px] h-[56px] pt-1 pb-1 pl-0 pr-0'>
      <div className='w-full flex rounded-md '>
        <div className='w-[270px] flex items-center p-1'>
          <p className='overflow-hidden text-ellipsis text-nowrap '>
            Lorem ipsum dolor sit wufgwkyefkwefkkjhgvcjhdsgcjhcdjh
          </p>
        </div>
        <div className='w-[90px] flex items-center justify-center '>
          <div className='flex gap-4 '>
            <EditButton />
            <DeleteButton />
          </div>
        </div>
      </div>
      <Separator className='mt-2' />
    </div>
  )
}
