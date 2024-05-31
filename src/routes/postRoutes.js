import { Router } from "express";
import 
    { 
     getAllPosts,
     createPost,
     updatePost,
     getPost,
     deletePost
    } from "../controller/postController.js";
import { verifyToken } from "../middleeware/verifikasiToken.js";
import { upload } from "../middleeware/uploadPic.js";

const postRouter = Router()

postRouter
    .get('/', getAllPosts)
    .post('/', verifyToken, upload.single('image'), createPost);
postRouter
    .put('/:id', verifyToken, upload.single('image'), updatePost )
    .get('/:id', getPost)
    .delete('/:id', verifyToken, deletePost)

export default postRouter;