import Post from "../model/post.js";

export const getAllPosts = async (req, res)=>{
    try {
        const posts = await Post.find().populate('createdBy', 'nama')
        res.status(200).json({ posts })
    } catch (error) {
        res.status(400).json({ 
            error: "Terdapat kesalahan",
            detail: error.message 
        })
    }
}

export const createPost = async (req, res) => {
    if (!req.file) {
        res.status(400).json({ error: 'Tidak ada file yang diunggah' });
    }
    const { title, content } = req.body;
    const image = req.file.filename;
    try {
        const newPost = new Post({
            title,
            content,
            image,
            createdBy: req.user.userId,
        });
        const savedPost = await newPost.save();
        res.status(201).json({ post: savedPost });
    } catch (error) {
        res.status(400).json({
            error: 'Gagal membuat post',
            detail: error.message 
        });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const image = req.file.filename;
    try {
        const updPost = {
            title,
            content,
            image,
            createdBy: req.user.userId,
        }
        const updatedPost = await Post.findOneAndUpdate(
            { _id : id },
            { $set: updPost },
            { new: true }
        )
        return res.status(200).json(updatedPost)
    } catch (error) {
        return res.status(400).json({error : "Terjadi kesalahan mengubah postingan", detail: error.message})
    }
}
