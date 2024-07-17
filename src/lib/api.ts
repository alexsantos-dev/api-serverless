import { localUrl } from '@/utils/consts'
import axios from 'axios'
import { TodoEntity } from '@/utils/interfaces/TodoEntity.interface'

export async function getAllTodos() {
  const response = await axios.get(`${localUrl}/api/todos`)
  return response.data as TodoEntity[]
}