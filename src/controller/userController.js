import User from "../model/user.js";

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ users })
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json({ user })
    } catch (error) {
        next(error)
    }
}

export const createUser = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            error: "inputan harus lengkap"
        })
    }
    try {
        const newUser = new User({name, email, password})
        const addUser = await newUser.save()
        return res.status(200).json(addUser)
    } catch (error) {
        return res.status(400).json({
            error : "Terjadi kesalahan saat input data",
            detail: error.message
        })
    }
}