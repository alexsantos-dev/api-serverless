'use client'

import { Suspense } from 'react'
import { ScrollArea } from '../../ui/scroll-area'
import TodoListItem from './todo-list-item'
import { TodoEntity } from '@/utils/interfaces/TodoEntity.interface'
import { TodoListScrollProps } from '@/utils/interfaces/TodoList.interface'
import TodoListScrollLoading from './todo-list-item-loading'

export default function TodoListScroll({
  todos,
  onAction,
}: TodoListScrollProps) {
  return (
    <ScrollArea className='w-[320px] md:w-[380px] h-[400px] flex justify-center items-center rounded-lg p-2'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {todos.length > 0 &&
          todos.map((todoEntity: TodoEntity) => (
            <TodoListItem
              onAction={onAction}
              key={todoEntity._id}
              id={todoEntity._id}
              title={todoEntity.title}
            />
          ))}
      </div>
    </ScrollArea>
  )
}
