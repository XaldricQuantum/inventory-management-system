import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('✅ MongoDB connected successfully')
    } catch (error) { 
        console.error('❌ Database connection error:', error);
        throw error;
    }
}

export default connectDB;