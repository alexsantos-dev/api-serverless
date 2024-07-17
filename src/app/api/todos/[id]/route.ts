import todoService from '@/lib/todo.service'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop()
  try {
    const todo = await todoService.getTodoById(id!)

    if (todo === null) {
      return NextResponse.json({ error: 'Entity not found' }, { status: 404 })
    }

    return NextResponse.json({ todo }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  const body = await request.json()
  const { title } = body
  const id = request.nextUrl.pathname.split('/').pop()
  try {
    const updatedTodo = await todoService.updateTodo(id!, body)
    if (!updatedTodo) {
      return NextResponse.json({ error: 'Entity not found' }, { status: 404 })
    }
    if (!title) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    }

    return NextResponse.json({ data: updatedTodo }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.split('/').pop()
  try {
    const response = await todoService.deleteTodo(id!)
    if (response === null) {
      return NextResponse.json({ error: 'Entity not found' }, { status: 404 })
    }
    return new Response(null, { status: 204 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}