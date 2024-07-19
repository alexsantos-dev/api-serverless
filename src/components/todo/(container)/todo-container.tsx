'use client'

import TodoAddButton from '../(add)/todo-add-button'
import TodoListScroll from '../(list)/todo-list-scroll'
import { useState, useEffect, useCallback } from 'react'
import { TodoEntity } from '@/utils/interfaces/TodoEntity.interface'
import axios from 'axios'
import TodoListScrollLoading from '../(list)/todo-list-scroll-loading'

export default function Container() {
  const [todos, setTodos] = useState<TodoEntity[]>([])

  const todosCallback = useCallback(async () => {
    const todosData = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_URL}/api/todos`
    )
    setTodos(todosData.data)
  }, [])

  useEffect(() => {
    todosCallback()
  }, [todosCallback])

  return (
    <div className='w-[400px] h-[500px] bg-background shadow-xl rounded-xl flex flex-col justify-center items-center'>
      {!todos || todos.length === 0 ? (
        <TodoListScrollLoading />
      ) : (
        <TodoListScroll todos={todos} onAction={todosCallback} />
      )}
      <TodoAddButton onAction={todosCallback} />
    </div>
  )
}
