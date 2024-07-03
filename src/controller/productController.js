import Product from "../model/product.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        return res.status(200).json({ products })
    } catch (error) {
        next(error)
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({ product })
    } catch (error) {
        next(error)
    }
}

export const createProduct = async (req, res, next) => {
    const { name, price, stock } = req.body;
    const image = req.file.filename;

    try {
        const newProduct = new Product({ 
            name,
            price,
            stock,
            image
        })
        const savedProduct = await newProduct.save()
        return res.status(200).json({ savedProduct })
    } catch (error) {
        next(error);
    }
}