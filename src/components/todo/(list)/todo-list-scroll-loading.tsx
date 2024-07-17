import TodoListItemLoading from './todo-list-item-loading'

export default function TodoListScrollLoading() {
  return (
    <div className='w-[400px] h-[400px] flex justify-center items-center'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <TodoListItemLoading />
        <TodoListItemLoading />
        <TodoListItemLoading />
        <TodoListItemLoading />
        <TodoListItemLoading />
        <TodoListItemLoading />
        <TodoListItemLoading />
      </div>
    </div>
  )
}
