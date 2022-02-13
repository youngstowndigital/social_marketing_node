import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myapp');
        console.log('db connected');
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDb;
