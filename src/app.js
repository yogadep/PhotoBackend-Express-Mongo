import express from 'express'; // Menggunakan default import
import mongoose from 'mongoose';
import adminRouter from './routes/adminRoutes.js';
import loginRouter from './routes/loginRoutes.js';
import postRouter from './routes/postRoutes.js';

const app = express()
const port = 3000
// Middleware untuk mem-parsing body
app.use(express.json()); // Untuk JSON
app.use(express.urlencoded({ extended: true })); // Untuk URL-encoded

app.use('/admin', adminRouter)
app.use('/auth', loginRouter)
app.use('/posts', postRouter)


const url = `mongodb+srv://yoghaap7:rahasia@cluster0.pqd6xxk.mongodb.net/jibo`

const cnt = async () => {
    try {
        await mongoose.connect(url);
        app.listen(port, ()=>{
            console.log(`app listen on port : ${port}`)
        })
       
    } catch (error) {
        console.log(error)
    }
}

cnt();


// const admin = mongoose.model('Admin',{
//     nama:
//         {
//             type: String,
//             required: true
//         },
//     username:
//         {
//             type: String,
//             required: true
//         },
//     password:
//         {
//             type: String,
//             required: true
//         }
// })

// const admin1 = new admin({
//     nama: 'Boye',
//     username: 'boyerco4',
//     password: 'rahasia'
// })

// admin1.save()
//     .then((result)=> console.log(result));

// const post = mongoose.model('Post',{
//     title:
//         {
//             type: String,
//             required: true
//         },
//     content:
//         {
//             type: String,
//             required: true
//         },
//     image:
//         {
//             type: String,
//             required: true
//         }
// })

// const post1 = new post({
//     title: 'Boye',
//     content: 'boye manusia ganteng',
//     image: 'by.jpg'
// })

// post1.save()
//     .then((result)=> console.log(result))
//     .catch(error => console.log(error));

// https://chatgpt.com/c/eb27f666-9eb8-48f1-a6de-9141d95b328f