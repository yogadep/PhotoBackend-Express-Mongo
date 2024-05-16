import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const url = process.env.DATABASE_URL

// connect
export const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log(`Berhasil terhubung ke database!`);
    } catch (error) {
        console.log('Gagal terhubung ke database:', error.message);
    }
}