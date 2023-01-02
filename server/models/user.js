import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
    },
    profilePicture: String,
    boardIds: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }
    ]
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);