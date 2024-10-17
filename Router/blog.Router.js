import express from "express";
import { createBlog, deleteBlog, getAllBlog, getByBlogId, updateBlog } from "../Controller/blog.controllers.js";


const blogRouter=express.Router()

blogRouter.post('/createBlog',createBlog);
blogRouter.get('/getAllPost', getAllBlog);
blogRouter.get('/getIdByBlog/:id',getByBlogId);
blogRouter.put('/updateBlog/:id', updateBlog);
blogRouter.delete('/deleteBlog/:id', deleteBlog)

export default blogRouter;