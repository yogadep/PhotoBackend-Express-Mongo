import express from 'express';
import mongoose from 'mongoose';
import adminRouter from './routes/adminRoutes.js';
import loginRouter from './routes/loginRoutes.js';
import postRouter from './routes/postRoutes.js';
import dotenv from "dotenv"
import { connect } from './library/db.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/admin', adminRouter)
app.use('/auth', loginRouter)
app.use('/posts', postRouter)

const startServer = async () => {
    try {
        await connect()
        app.listen(port, ()=>{
            console.log(`app listen on port: ${port}`);
        })
    } catch (error) {
        console.log(`Gagal terhubung ke server: ${error.message}`);
    }
}

startServer()
