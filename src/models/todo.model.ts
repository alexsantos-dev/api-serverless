import mongoose, { Document, Schema } from 'mongoose'

export interface ITodo extends Document {
  title: string
  completed: boolean
  createdAt: Date
  updatedAt: Date
}

const todoSchema: Schema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

todoSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() })
  next()
})

const Todo = mongoose.models.Todo || mongoose.model<ITodo>('Todo', todoSchema)

export default Todo
