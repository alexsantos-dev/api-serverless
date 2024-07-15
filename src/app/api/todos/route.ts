import { NextRequest, NextResponse } from 'next/server'
import todoService from '@/lib/todo.service'

export async function GET() {
  try {
    const todos = await todoService.getAllTodos()
    if (todos.length === 0) {
      return NextResponse.json({ error: 'No data found', status: 404 })
    }

    return NextResponse.json({ todos, status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(NextRequest: any) {
  const body = await NextRequest.json()
  try {
    if (!body) {
      return NextResponse.json({ error: 'Title is required', status: 400 })
    }

    const newTodo = await todoService.createTodo(body)
    return NextResponse.json(newTodo)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}