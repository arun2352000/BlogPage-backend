import BLOG from "../Modules/blog.Schema.js";

export const createBlog = async(req,res)=>{
    try{
        const {title, content, category, author, image}= req.body;
        const newBlog = new BLOG({title, content, category, author, image});
        await newBlog.save();
        res.status(201).json({message:"Blog created successfully",newBlog});
        }
        catch (error) {
            console.log(error);
            res.status(500).json({message:"Error creating Blog",error});
        }
}

export const getAllBlog = async(req,res)=>{
    try {
        
        const blogs = await BLOG.find().sort({createdAt: -1});
        res.status(200).json({message:"Blog fetched successfully",data:blogs});
    } catch (error) {
        
        res.status(500).json({message:"Error fetching blog",error});
    }
}

export const getByBlogId = async(req,res)=> {
   try {
    const blogId = req.params.id;
    const blog = await BLOG.findById(blogId);
    if(!blog){
        return res.status(404).json({message:"Blog not found"});
        }
        res.status(200).json({message:"Blog fetched successfully",data:blog});

   } catch (error) {
    res.status(500).json({message:"Error fetching blog",error});

   }
}

export const updateBlog = async(req,res)=>{
   try {
    const blogId = req.params.id;
    const {title, content, category, author, image, updateAt}= req.body;
    const result = await BLOG.updateOne({_id:blogId},{title, content, category, author, image, updateAt} )
    if(result.matchedCount === 0){
        return res.status(404).json({message:"Blog not found",error});
        }
        res.status(200).json({message:"Blog updated successfully",data:result});
        const blog = await TODO.findById(blogId)
        res.status(200).json({message:"Blog updated successfully",data:blog});
   } catch (error) {
    res.status(500).json({message:"Error updating blog",error});    
   }
}
   
   export const deleteBlog = async(req,res)=>{
    try {
        const blogId = req.params.id;
        const result = await BLOG.deleteOne({_id:blogId});
        if(result.deletedCount === 0){
            return res.status(404).json({message:"Blog not found",error});
            }
            res.status(200).json({message:"Blog deleted successfully",data:result}).end();


    } catch (error) {
       
    if (!res.headersSent) {
        res.status(500).json({ message: 'An error occurred' });
      }
      console.error('Error:', error);
    
    }
   }