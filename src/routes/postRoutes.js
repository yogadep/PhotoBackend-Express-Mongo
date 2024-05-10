import { Router } from "express";
import { getAllPosts, createPost } from "../controller/postController.js";
import { verifyToken } from "../middleeware/verifikasiToken.js";
import { upload } from "../middleeware/uploadPic.js";

const postRouter = Router()

postRouter
    .get('/', getAllPosts)
    .post('/', verifyToken, upload.single('image'), createPost);

export default postRouter;