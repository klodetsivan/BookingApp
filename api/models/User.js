import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        uniq: true
    },
    email: {
        type: String,
        required: true,
        uniq: true
    },
    password: {
        type: String,
        required: true,
        uniq: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true }

);

export default mongoose.model("User", UserSchema);