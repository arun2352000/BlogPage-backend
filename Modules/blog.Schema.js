import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
            },
        author:{
            type:String,
            required:true
            },
            image:{
                type:String     
                },
                createAt:{
                    type:Date,
                    default:Date.now
                },
                updateAt:{
                    type:Date,
                    default:Date.now
                    }

    }
);

const BLOG = mongoose.model('BLOG',blogSchema);
export default BLOG