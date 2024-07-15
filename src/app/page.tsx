/* interface Todo {
  _id: string
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
} */

import Container from '@/components/todo/todo-container'

export default function Home() {
  return (
    <main className='w-full h-dvh bg-slate-300 flex justify-center items-center'>
      <Container />
    </main>
  )
}
