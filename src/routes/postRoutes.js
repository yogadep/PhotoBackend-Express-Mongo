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
import { body, check } from "express-validator";
import validate from "../middleeware/validation.js"

const postRouter = Router()
// post validation -> validation middleware
const postValidation = [
    body('title')
        .exists({ checkFalsy: true })
        .withMessage('title wajib diisi')
        .isString()
        .withMessage('title harus string'),
    body('content')
        .exists({ checkFalsy: true })
        .withMessage('content wajib diisi')
        .isString()
        .withMessage('content harus string')
        .isLength({ min: 5 })
        .withMessage("content minimal 5 karakter"),
    check('image')
        .custom((value, {req}) => {
            // console.log("File yang diunggah di validasi:", req.file); 
            if(!req.file){
                throw new Error('Silahkan upload gambar terlebih dulu')
            }

            const allowedExtensions = ['image/jpeg', 'image/png'];
            // mime : file extensions
            if (!allowedExtensions.includes(req.file.mimetype)) {
                throw new Error('Hanya file JPG atau PNG yang diperbolehkan');
            }
            return true;
        })
]

const updateValidation = [
    body('title')
        .optional()
        .isLength({ min: 5, max: 20 })
        .withMessage('Panjang konten antara 5-20 karakter'),
    body('content')
        .optional()
        .isLength({ min: 5, max: 20 })
        .withMessage('Panjang konten antara 5-20 karakter'),
    body('image')
        .custom((value, {req}) => {
		   if(!req.file){
				return true;
		   }

           const allowedExtensions = ['image/jpeg', 'image/png']; 

           if (!allowedExtensions.includes(req.file.mimetype)) {
           		throw new Error('Hanya file JPG atau PNG yang diperbolehkan');
           }
		   return true;
        })
]

postRouter
    .get('/', getAllPosts)
    .post('/', verifyToken, upload.single('image'), postValidation, validate, createPost);
postRouter
    .put('/:id', verifyToken, upload.single('image'), updateValidation, validate, updatePost)
    .get('/:id', getPost)
    .delete('/:id', verifyToken, deletePost)

export default postRouter;