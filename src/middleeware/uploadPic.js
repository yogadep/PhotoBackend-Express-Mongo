import multer from "multer";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Mendapatkan `__filename` dan `__dirname` dalam konteks ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        // cb(null, 'uploads/')
        const uploadsPath = path.join(__dirname, '../uploads'); // Pastikan jalur benar
        
        // Pastikan direktori ada
        // if (!fs.existsSync(uploadsPath)) {
        //     fs.mkdirSync(uploadsPath); // Buat direktori jika tidak ada
        // }
        
        cb(null, uploadsPath); // Pastikan penyimpanan di direktori yang benar
    },
    filename: (req, file, cb) => {
        // mengatur agar nama jadi unik dengan math random
        const unique = Date.now() + Math.round(Math.random() * 1E9);
        // mengambil ekstensi file (jpg,png dll) name yg nanti akan digabungkan dengan nama yg unik
        const ext = path.extname(file.originalname);
        // Menggabungkan file.fieldname dengan uniqueSuffix dan ext adalah cara yang umum untuk membuat nama file yang unik saat menyimpan file yang diunggah.
        // ex = Jika fieldnya bernama profilePic/name di form html, maka file yang disimpan akan memiliki nama yang mencerminkan sumbernya. Ini membantu Anda atau pengembang lain memahami dari mana asal file tersebut.
        cb(null, file.fieldname + '-' + unique + ext);
    }
});

export const upload = multer({ storage });
