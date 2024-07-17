import { ScrollArea } from '../ui/scroll-area'
import TodoListItem from './todo-list-item'
import axios from 'axios'
import { localUrl } from '@/utils/consts'

interface TodoEntity {
  _id: string
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
  __v: number
}

export default async function TodoListScrool() {
  const response = await axios.get(`${localUrl}/api/todos`)
  const allTodos: TodoEntity[] = response.data
  return (
    <ScrollArea className='w-[400px] h-[400px] flex justify-center items-center'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {allTodos && allTodos.length > 0 ? (
          allTodos.map((todoEntity: TodoEntity) => (
            <TodoListItem
              key={todoEntity._id}
              id={todoEntity._id}
              title={todoEntity.title}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </ScrollArea>
  )
}
