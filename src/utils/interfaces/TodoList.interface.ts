import { TodoEntity } from './TodoEntity.interface'

export interface TodoListScrollProps {
  todos: TodoEntity[]
  onAction: () => Promise<void>
}

export interface TodoListItemProps {
  id: string
  title: string
}

export interface TodoButtonActionProps extends TodoListItemProps {
  onAction: () => Promise<void>
}

export interface TodoDeleteButtonProps {
  id: string
  onAction: () => Promise<void>
}

export interface TodoAddButtonProps {
  title: string
  onAction: () => Promise<void>
}