import connectMongo from './connectMongo'
import Todo, { ITodo } from '@/models/todo.model'
import { TodoCreateDto } from '@/models/dto/create-todo.dto'
import { TodoUpdateDto } from '@/models/dto/update-todo.dto'

export default class TodoService {
  async getAllTodos(): Promise<ITodo[]> {
    await connectMongo()
    return await Todo.find().sort({ updatedAt: -1 })
  }

  async getTodoById(id: string): Promise<ITodo | null> {
    await connectMongo()
    return await Todo.findById(id)
  }

  async createTodo(todoData: TodoCreateDto): Promise<ITodo> {
    await connectMongo()
    const todo = new Todo(todoData)
    await todo.save()
    return todo
  }

  async updateTodo(id: string, updateData: TodoUpdateDto): Promise<ITodo | null> {
    await connectMongo()
    return await Todo.findByIdAndUpdate(id, updateData, { new: true })
  }

  async deleteTodo(id: string): Promise<void> {
    await connectMongo()
    await Todo.findByIdAndDelete(id)
  }
}
