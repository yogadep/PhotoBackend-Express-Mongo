import express from 'express';
import mongoose from 'mongoose';
import adminRouter from './routes/adminRoutes.js';
import loginRouter from './routes/loginRoutes.js';
import postRouter from './routes/postRoutes.js';

const app = express()
const port = 3000

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/admin', adminRouter)
app.use('/auth', loginRouter)
app.use('/posts', postRouter)


const url = `url mongodb`

// connect
const connect = async () => {
    try {
        await mongoose.connect(url);
        app.listen(port, ()=>{
            console.log(`app listen on port : ${port}`)
        })
       
    } catch (error) {
        console.log(error)
    }
}

connect();
