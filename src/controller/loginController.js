import Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user.js";
import Admin from "../model/admin.js";

export const login = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        // let user = await Admin.findOne({ email });
        
        // if(!user || !bcrypt.compareSync(password, user.password)){
        //     res.status(400).json({error: "username/password salah"})
        // }else{
        //     const token = Jwt.sign(
        //         { 
        //             userId: user._id,
        //             username: user.username 
        //         }, 
        //         process.env.secret,
        //         { expiresIn: '1h' });
        //     res.status(200).json({token})
        // }
        let user = await Admin.findOne({ email });

        if(user && bcrypt.compareSync(password, user.password)){
            const token = Jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                    role: "admin",
                },
                process.env.secret,
                { expiresIn: '1h' }
            );
            return res.status(200).json({ token })
        }

        user = await User.findOne({ email });

        if(user && bcrypt.compareSync(password, user.password)){
            const token = Jwt.sign(
                {
                    user: user._id,
                    email: user.email,
                    role: "user",
                },
                process.env.secret,
                { expiresIn: '1h' }
            );
            return res.status(200).json({ token })
        }
        return res.status(400).json({ error: "username/password salah" });        
    } catch (error) {
        next(error)
    }
}

