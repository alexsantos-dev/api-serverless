import connectMongo from './connectMongo'
import Todo, { ITodo } from '@/models/todo.model'
import { TodoCreateDto } from '@/models/dto/create-todo.dto'
import { TodoUpdateDto } from '@/models/dto/update-todo.dto'

class TodoService {
  async getAllTodos(): Promise<ITodo[]> {
    await connectMongo()
    return await Todo.find().sort({ updatedAt: -1 })
  }

  async getTodoById(_id: string): Promise<ITodo | null> {
    await connectMongo()
    return await Todo.findById(_id)
  }

  async createTodo(todoData: TodoCreateDto): Promise<ITodo> {
    await connectMongo()
    const todo = new Todo(todoData)
    await todo.save()
    return todo
  }

  async updateTodo(_id: string, updateData: TodoUpdateDto): Promise<ITodo | null> {
    await connectMongo()
    return await Todo.findByIdAndUpdate(_id, updateData, { new: true })
  }

  async deleteTodo(_id: string): Promise<void> {
    await connectMongo()
    await Todo.findByIdAndDelete(_id)
  }
}

export default new TodoService()
