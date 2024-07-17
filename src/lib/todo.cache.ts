import { TodoEntity } from '@/utils/interfaces/TodoEntity.interface'

// Função para salvar no cache
export const setTodoCache = (todosCache: TodoEntity[]): void => {
  const todosJson = JSON.stringify(todosCache)
  localStorage.setItem('todosCache', todosJson)
}

// Função para ler do cache
export const getTodoCache = (): TodoEntity[] => {
  const todosCacheds = localStorage.getItem('todosCache')
  if (todosCacheds) {
    try {
      const todos: TodoEntity[] = JSON.parse(todosCacheds)
      return todos.map((todo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
        updatedAt: new Date(todo.updatedAt),
      }))
    } catch (error) {
      console.error("Failed to parse cached todos:", error)
      localStorage.removeItem('todosCache')
    }
  }
  return []
}
