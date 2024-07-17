import TodoAddButton from './todo-add-button'
import TodoListScrool from './todo-list-scroll'

export default function Container() {
  return (
    <div className='w-[400px] h-[500px] bg-background shadow-xl rounded-xl flex flex-col justify-center items-center'>
      <TodoListScrool />
      <TodoAddButton />
    </div>
  )
}
