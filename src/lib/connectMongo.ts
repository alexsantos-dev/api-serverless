import mongoose from 'mongoose'

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL!)
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

export default connectMongo
