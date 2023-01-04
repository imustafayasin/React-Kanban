import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
    },
    emailConfirmed: {
        type: Boolean
    },
    profilePicture: String,
    boards: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }
    ]
}, { timestamps: true });

class User {

    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.name = email.split("@").shift()
    }

    addBoard(board) {
        this.boards.push(board);
        this.save();
    }
}


userSchema.loadClass(User)
export default mongoose.model('User', userSchema);