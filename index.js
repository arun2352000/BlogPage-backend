import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from "./Database/dbConfig.js";
import blogRouter from "./Router/blog.Router.js";



dotenv.config();

const app=express();
const port=process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

connectDB();

app.use('/api/Blog',blogRouter)

app.listen(
    port,
    () => console.log(`Server is running on port ${port}`)
)
