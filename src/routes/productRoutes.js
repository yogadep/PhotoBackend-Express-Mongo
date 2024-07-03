import { Router } from "express";
import { getAllProducts, getProduct, createProduct } from "../controller/productController.js";
import { upload } from "../middleeware/uploadPic.js";

const productRouter = Router()

productRouter.get('/', getAllProducts)
             .post('/', upload.single('image'), createProduct);
productRouter.get('/:id', getProduct);

export default productRouter;