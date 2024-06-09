import express from 'express';
import adminRouter from './routes/adminRoutes.js';
import userRouter  from './routes/userRoutes.js';
import loginRouter from './routes/loginRoutes.js';
import postRouter from './routes/postRoutes.js';
import { connect } from './library/db.js';
import { errorHandler } from './middleeware/errorHandler.js';
import cors from 'cors';


const app = express()
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/auth', loginRouter)
app.use('/posts', postRouter)

// using global errorHandler
app.use(errorHandler)

// connetion
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
