import { ScrollArea } from '../ui/scroll-area'
import TodoListItem from './todo-list-item'

export default function TodoListScrool() {
  return (
    <ScrollArea className='w-[400px] h-[400px] flex justify-center items-center'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    </ScrollArea>
  )
}
