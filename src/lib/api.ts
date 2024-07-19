import axios from 'axios'
import { TodoEntity } from '@/utils/interfaces/TodoEntity.interface'

export async function getAllTodos() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_DEV_URL}/api/todos`)
  return response.data as TodoEntity[]
}