import Jwt  from "jsonwebtoken";
import Admin from "../model/admin.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv"

dotenv.config();

export const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await Admin.findOne({ username });
        
        if(!user || !bcrypt.compareSync(password, user.password)){
            res.status(400).json({error: "username/password salah"})
        }else{
            const token = Jwt.sign(
                { 
                    userId: user._id,
                    username: user.username 
                }, 
                process.env.secret,
                { expiresIn: '1h' });
            res.status(200).json({token})
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}
