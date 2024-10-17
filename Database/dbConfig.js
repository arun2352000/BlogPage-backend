import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoURL = process.env.MONGODBCONNECTIONSSTRING

const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(mongoURL)
        console.log(`MongoDB Connected: ${connection.connection.host}`)
        return connection

    } catch (error) {
        console.log(error.message)
        
    }
}


export default connectDB