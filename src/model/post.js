import { mongoose, Schema} from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String, // Nama file gambar
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admins',
        required: true
    }
},
{
    timestamps: true,
}
);

// Buat model dari skema
const Post = mongoose.model('post', postSchema)

export default Post