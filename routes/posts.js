//const { request, response } = require("express");
const express = require("express");
const Posts = require("../models/posts");

const router = express.Router();

//ADD MEMBER
router.post('/post/save' ,(_req,res)=>{   
    let newPost = new Posts(_req.body);
   
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
       }
        return res.status(200).json({
            sucess:"Posts saved successfully"
        });
    });
   });

   //READ SPECIFIC MEMBERS
   router.get('/post/:id',(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

   //READ MEMBER
   router.get('/posts',(_req,res) =>{
    Posts.find().exec((err,posts) =>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingPosts:posts
    });
});
});

//UPDATE MEMBER
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,_post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
        });
        }
    );
});
//DELETE MEMBER
router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

            if (err) return res.status(400).json({
                message:"Delete Unsucessful",err
            });
            return res.json({
                message:"Delete Sucessful",deletedPost 
              });
});
});
module.exports = router;