import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function(next) {
    const modifyPassword = this.isModified('password');

    if(!modifyPassword) return next;
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(this.password, salt);
      this.password = hashedPass;
      next()
    } catch (error) {
      next(error)
    }
});

// Buat model dari skema
const User = mongoose.model('users', userSchema);
export default User; // Atau ekspor sebagai named export: export { Admin };

