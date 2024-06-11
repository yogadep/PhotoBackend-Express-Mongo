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
import { checkRole } from "../middleeware/checkRole.js";
import { postValidation, updateValidation, validate } from "../middleeware/validation.js";

const postRouter = Router()

postRouter
    .get('/', getAllPosts)
    .post('/', verifyToken, checkRole('admin'), upload.single('image'), postValidation, validate, createPost);
postRouter
    .put('/:id', verifyToken, checkRole('admin'), upload.single('image'), updateValidation, validate, updatePost)
    .get('/:id', getPost)
    .delete('/:id', verifyToken, checkRole('admin'), deletePost)

export default postRouter;