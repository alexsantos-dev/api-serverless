import { useState, useEffect } from 'react'
import { localUrl } from '../utils/consts'
interface Todo {
  _id: string
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

export default function Home() {
  /* const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')

  const fetchTodos = async () => {
    try {
      const res = await fetch(`${localUrl}/api/todos`)
      if (!res.ok) {
        console.error('Error fetching todos:', res.statusText)
        return
      }
      const data = await res.json()
      setTodos(data)
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  const addTodo = async () => {
    if (!title) {
      return console.log('Adding todo with title:', title)
    } // Verifique o valor aqui
    try {
      const res = await fetch(`${localUrl}/api/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })
      const newTodo = await res.json()
      setTodos([...todos, newTodo])
      setTitle(title)
    } catch (error) {
      console.error('Add error:', error)
    }
  }

  const toggleTodo = async (todo: Todo) => {
    try {
      const res = await fetch(`${localUrl}/api/todos`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: todo._id, completed: !todo.completed }),
      })
      if (!res.ok) {
        console.error('Error toggling todo:', res.statusText)
        return
      }
      const updatedTodo = await res.json()
      setTodos(todos.map((t) => (t._id === updatedTodo._id ? updatedTodo : t)))
    } catch (error) {
      console.error('Toggle error:', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      const res = await fetch(`${localUrl}/api/todos`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deleteId: id }),
      })
      if (!res.ok) {
        console.error('Error deleting todo:', res.statusText)
        return
      }
      setTodos(todos.filter((todo) => todo._id !== id))
    } catch (error) {
      console.error('Delete error:', error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])
 */
  return (
    <h1>oi</h1>
    /* 
    <div className='flex flex-col justify-center items-center'>
      <h1>Todo List</h1>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Add a new todo'
        className='text-black'
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => toggleTodo(todo)}>
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
   */
  )
}
