import { TodoCreateDto } from './create-todo.dto'
import { PartialType } from '@nestjs/mapped-types'
export class TodoUpdateDto extends PartialType(TodoCreateDto) { }